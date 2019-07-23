import React, { useCallback } from 'react';
import { History } from 'history';

import useCurrentChat from './hooks/useCurrentChat';
import ChatNavigation from './components/ChatNavigation/';
import MessagesList from './components/MessagesList/';
import MessageInput from './components/MessageInput/';

import { Container } from './styles';
interface ChatRoomProps {
  chatId: string;
  history: History;
}

export default function ChatRoom(props: ChatRoomProps) {
  const { chat, setCurrentChat } = useCurrentChat(props.chatId);
  const handleSendMessage = useCallback(
    (content: string) => {
      if (!chat) return null;
      const message = {
        id: (chat.messages.length + 10).toString(),
        createdAt: new Date(),
        content,
      };
      setCurrentChat({
        ...chat,
        messages: chat.messages.concat(message),
      });
    },
    [chat, setCurrentChat]
  );

  if (!chat) {
    return null;
  }
  return (
    <Container>
      <ChatNavigation chat={chat} history={props.history} />
      {chat.messages && <MessagesList messages={chat.messages} />}
      <MessageInput handleSendMessage={handleSendMessage} />
    </Container>
  );
}
