import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { ChatList } from '../types/chat.d';
import * as fragments from '../../../fragments';

export const getChatsQuery = gql`
  query GetChats {
    chats {
      id
      name
      picture
      lastMessage {
        id
        content
        createdAt
      }
    }
  }
`;

export const chatsQuery = gql`
  query Chats {
    chats {
      ...Chat
    }
  }
  ${fragments.chat}
`;

export default function useChats(): ChatList {
  const { data: { chats = null } = {} } = useQuery<any>(getChatsQuery);

  return chats;
}
