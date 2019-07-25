import React from 'react';
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
  const { chat } = useCurrentChat(props.chatId);
  if (!chat) {
    return null;
  }
  return (
    <Container>
      <ChatNavigation chat={chat} history={props.history} />
      {chat.messages && <MessagesList messages={chat.messages} />}
      {chat && <MessageInput chatId={props.chatId} chat={chat} />}
    </Container>
  );
}
