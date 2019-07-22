import { ChatList } from '../types/chat.d';

const chatService = {
  async getChats(): Promise<ChatList> {
    const getChatsQuery = `
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
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: getChatsQuery }),
    });
    const {
      data: { chats },
    } = await response.json();
    return chats;
  },
};

export default chatService;
