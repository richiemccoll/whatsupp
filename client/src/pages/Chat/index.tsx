import React from 'react';
import { History } from 'history';

import useChats from './hooks/useChats';
import ChatList from './components/ChatList';

import { Container, Navbar } from './styles';

interface ChatsPageProps {
  history: History;
}

export default function ChatPage({ history }: ChatsPageProps) {
  const chats = useChats();
  if (!chats) {
    return null;
  }
  return (
    <Container>
      <Navbar>Whatsupp</Navbar>
      <ChatList chats={chats} history={history} />
    </Container>
  );
}
