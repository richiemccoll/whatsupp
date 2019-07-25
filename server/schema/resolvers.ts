import { GraphQLDateTime } from 'graphql-iso-date';
import { chats } from '../mocks/chats';
import { messages } from '../mocks/messages';

const resolvers = {
  Date: GraphQLDateTime,

  Chat: {
    messages(chat: any) {
      return messages.filter(m => chat.messages.includes(m.id));
    },

    lastMessage(chat: any) {
      const lastMessage = chat.messages[chat.messages.length - 1];
      return messages.find(m => m.id === lastMessage);
    },
  },

  Query: {
    chats() {
      return chats;
    },

    chat(root: any, { chatId }: any) {
      return chats.find(c => c.id === chatId);
    },
  },

  Mutation: {
    addMessage(root: any, { chatId, content }: any) {
      const chatIndex = chats.findIndex(chat => chat.id === chatId);
      if (chatIndex === -1) {
        return null;
      }
      const chat = chats[chatIndex];
      const lastMessageId = chat.messages[chat.messages.length - 1];
      const messageId = String(Number(lastMessageId) + 1);
      const message = {
        id: Math.random()
          .toString(36)
          .substr(2, 9),
        createdAt: new Date(),
        content,
      };
      messages.push(message);
      chat.messages.push(messageId);

      chats.splice(chatIndex, 1);
      chats.unshift(chat);
      return message;
    },
  },
};

export default resolvers;
