import React, { useCallback } from 'react';
import { History } from 'history';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { ChatQueryResult } from '../../types/chat-room';
import { Container, BackButton, Picture, Name } from './styles';

interface ChatNavigationProps {
  history: History;
  chat: ChatQueryResult;
}

export default function ChatNavigation({ chat, history }: ChatNavigationProps) {
  const navigateBack = useCallback(() => {
    history.replace('/');
  }, [history]);

  return (
    <Container>
      <BackButton onClick={navigateBack}>
        <ArrowBackIcon />
      </BackButton>
      <Picture src={chat.picture} />
      <Name>{chat.name}</Name>
    </Container>
  );
}
