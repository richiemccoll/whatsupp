import styled from 'styled-components';

const Container = styled.div`
  display: block;
  flex: 2;
  overflow-y: overlay;
  padding: 0 15px;
`;
const MessageItem = styled.div`
  float: right;
  background-color: #fff;
  display: inline-block;
  position: relative;
  max-width: 100%;
  border-radius: 7px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  margin-top: 10px;
  margin-bottom: 10px;
  clear: both;
  &::after {
    content: '';
    display: table;
    clear: both;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 3px;
    width: 12px;
    height: 19px;
    right: -11px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
const Contents = styled.div`
  padding: 10px 10px;
  word-wrap: break-word;
  &::after {
    content: ' \\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0';
    display: inline;
  }
`;
const Timestamp = styled.div`
  position: absolute;
  bottom: 5px;
  right: 7px;
  color: gray;
  font-size: 12px;
`;

const Message = {
  Container: Container,
  Item: MessageItem,
  Contents: Contents,
  Timestamp: Timestamp,
};

export default Message;
