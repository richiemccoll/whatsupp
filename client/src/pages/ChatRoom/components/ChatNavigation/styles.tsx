import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

export const Container = styled(Toolbar)`
  padding: 0;
  display: flex;
  flex-direction: row;
  background-color: var(--primary-bg);
  color: var(--primary-text);
`;

export const BackButton = styled(Button)`
  svg {
    color: var(--primary-text);
  }
`;

export const Picture = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 3px;
  object-fit: cover;
  padding: 5px;
  border-radius: 50%;
`;

export const Name = styled.div`
  line-height: 56px;
  margin-left: 10px;
  font-weight: bold;
`;
