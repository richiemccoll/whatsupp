import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { format } from 'date-fns';
import { ChatQueryMessage } from '../../types/chat-room';
import Styles from './styles';

interface MessagesListProps {
  messages: Array<ChatQueryMessage>;
}

export default function MessagesList({ messages }: MessagesListProps) {
  const selfRef = useRef(null);
  useEffect(() => {
    if (!selfRef.current) {
      return;
    }

    const selfDOMNode = ReactDOM.findDOMNode(selfRef.current) as HTMLElement;
    selfDOMNode.scrollTop = Number.MAX_SAFE_INTEGER;
  }, [messages.length]);
  return (
    <Styles.Container ref={selfRef}>
      {messages.map((message: any) => (
        <Styles.Item key={message.id}>
          <Styles.Contents>{message.content}</Styles.Contents>
          <Styles.Timestamp>
            {format(message.createdAt, 'HH:mm')}
          </Styles.Timestamp>
        </Styles.Item>
      ))}
    </Styles.Container>
  );
}
