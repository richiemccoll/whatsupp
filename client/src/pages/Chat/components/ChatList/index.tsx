import React, { useCallback } from 'react';
import { format } from 'date-fns';
import { History } from 'history';
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
  history: History;
}

export default function ChatList(props: ChatListProps) {
  const navigateToChat = useCallback(
    chat => {
      props.history.push(`chats/${chat.id}`);
    },
    [props.history]
  );
  return (
    <Container>
      <StyledList>
        {props.chats.map(chat => (
          <StyledListItem
            key={chat.id}
            button
            onClick={navigateToChat.bind(null, chat)}>
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
