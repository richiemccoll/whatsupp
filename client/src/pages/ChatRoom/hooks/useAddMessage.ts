import gql from 'graphql-tag';
import { defaultDataIdFromObject } from 'apollo-cache-inmemory';
import { useMutation } from 'react-apollo-hooks';
import { useCallback } from 'react';

import { getCurrentChatQuery } from './useCurrentChat';
import { chatsQuery } from '../../Chat/hooks/useChats';
import * as fragments from '../../../fragments';

const addMessageMutation = gql`
  mutation AddMessage($chatId: ID!, $content: String!) {
    addMessage(chatId: $chatId, content: $content) {
      ...Message
    }
  }
  ${fragments.message}
`;

interface ChatsResult {
  chats: any[];
}

export default function useAddMessage(id: any, chat: any) {
  debugger;
  const [addMessage] = useMutation(addMessageMutation);
  const handleSendMessage = useCallback(
    (content: string) => {
      addMessage({
        variables: { chatId: id, content },
        optimisticResponse: {
          __typename: 'Mutation',
          addMessage: {
            __typename: 'Message',
            id: Math.random()
              .toString(36)
              .substr(2, 9),
            createdAt: new Date(),
            content,
          },
        },
        update: (client, { data: { addMessage } }) => {
          type FullChat = { [key: string]: any };
          let fullChat;
          const chatIdFromStore = defaultDataIdFromObject(chat);

          if (chatIdFromStore === null) {
            return;
          }

          try {
            fullChat = client.readFragment<FullChat>({
              id: chatIdFromStore,
              fragment: fragments.fullChat,
              fragmentName: 'FullChat',
            });
          } catch (e) {
            return;
          }

          if (fullChat === null) {
            return;
          }
          if (fullChat.messages.some((m: any) => m.id === addMessage.id))
            return;

          fullChat.messages.push(addMessage);
          fullChat.lastMessage = addMessage;

          client.writeFragment({
            id: chatIdFromStore,
            fragment: fragments.fullChat,
            fragmentName: 'FullChat',
            data: fullChat,
          });

          let data;
          try {
            data = client.readQuery<ChatsResult>({
              query: chatsQuery,
            });
          } catch (e) {
            return;
          }

          if (!data || data === null) {
            return null;
          }
          if (!data.chats || data.chats === undefined) {
            return null;
          }
          const chats = data.chats;

          const chatIndex = chats.findIndex((c: any) => c.id === id);
          if (chatIndex === -1) return;
          const chatWhereAdded = chats[chatIndex];

          chats.splice(chatIndex, 1);
          chats.unshift(chatWhereAdded);

          client.writeQuery({
            query: getCurrentChatQuery,
            data: { chats: chats },
          });
        },
      });
    },
    [chat, id, addMessage]
  );
  return handleSendMessage;
}
