import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';

import Message from './styles';

interface MessageInputProps {
  handleSendMessage(content: string): any;
}

export default function MessageInput(props: MessageInputProps) {
  const [message, setMessage] = useState('');
  const submitMessage = () => {
    if (!message) {
      return;
    }
    setMessage('');
    props.handleSendMessage(message);
  };
  const onKeyPress = (e: any) => {
    if (e.charCode === 13) {
      submitMessage();
    }
  };

  const onChange = ({ target }: any) => {
    setMessage(target.value);
  };

  return (
    <Message.Container>
      <Message.Input
        type="text"
        placeholder="Type a message"
        onKeyPress={onKeyPress}
        onChange={onChange}
        value={message}
      />
      <Message.Button
        variant="contained"
        color="primary"
        onClick={submitMessage}>
        <SendIcon />
      </Message.Button>
    </Message.Container>
  );
}
