import { useMemo, useState } from 'react';
import chatRoomService from '../services/chat-room';
import { OptionalChatQueryResult } from '../types/chat-room';

export default function useCurrentChat(id: string) {
  const [currentChat, setCurrentChat] = useState<OptionalChatQueryResult>(null);

  useMemo(async () => {
    const currentChat = await chatRoomService.getCurrentChat(id);
    setCurrentChat(currentChat);
  }, [id]);

  return currentChat;
}
