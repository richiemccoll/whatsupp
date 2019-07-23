import React from 'react';
import { History } from 'history';

import useCurrentChat from './hooks/useCurrentChat';
import ChatNavigation from './components/ChatNavigation/index';

interface ChatRoomProps {
  chatId: string;
  history: History;
}

export default function ChatRoom(props: ChatRoomProps) {
  const chat = useCurrentChat(props.chatId);
  if (!chat) {
    return null;
  }
  return (
    <div>
      <ChatNavigation chat={chat} history={props.history} />
      <img src={chat.picture} alt="Profile" />
      <div>{chat.name}</div>
      <ul>
        {chat.messages.map(message => (
          <li key={message.id}>
            <div>{message.content}</div>
            <div>{message.createdAt}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
