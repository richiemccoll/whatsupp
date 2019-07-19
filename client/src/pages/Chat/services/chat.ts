import { ChatList } from '../types/chat.d';

const chatService = {
  async getChats(): Promise<ChatList> {
    const response = await fetch('/chats');
    const chats = await response.json();
    return chats;
  },
};

export default chatService;
