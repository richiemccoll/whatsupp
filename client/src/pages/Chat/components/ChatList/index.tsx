import React from 'react';
import { format } from 'date-fns';

import { ChatList as ChatListType } from '../../types/chat.d';
import {
  Container,
  StyledList,
  StyledListItem,
  ChatPicture,
  ChatInfo,
  ChatName,
  MessageContent,
  MessageDate,
} from './styles';

interface ChatListProps {
  chats: ChatListType;
}

export default function ChatList(props: ChatListProps) {
  return (
    <Container>
      <StyledList>
        {props.chats.map(chat => (
          <StyledListItem key={chat.id} button>
            <ChatPicture src={chat.picture} alt="Profile" />
            <ChatInfo>
              <ChatName>{chat.name}</ChatName>
              {chat.lastMessage && (
                <React.Fragment>
                  <MessageContent>{chat.lastMessage.content}</MessageContent>
                  <MessageDate>
                    {format(chat.lastMessage.createdAt, 'HH:mm')}
                  </MessageDate>
                </React.Fragment>
              )}
            </ChatInfo>
          </StyledListItem>
        ))}
      </StyledList>
    </Container>
  );
}
