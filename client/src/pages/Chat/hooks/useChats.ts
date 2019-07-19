import { useState, useMemo } from 'react';
import chatService from '../services/chat';
import { ChatList } from '../types/chat.d';

export default function useChats(): ChatList {
  const [chats, setChats] = useState<any[]>([]);

  useMemo(async () => {
    const chats = await chatService.getChats();
    setChats(chats);
  }, []);

  return chats;
}
