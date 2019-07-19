import React from 'react';
import styled from 'styled-components';

import useChats from './hooks/useChats';
import ChatList from './components/ChatList';

const Container = styled.div`
  height: 100vh;
`;

export default function ChatPage() {
  const chats = useChats();

  return (
    <Container>
      <ChatList chats={chats} />
    </Container>
  );
}
