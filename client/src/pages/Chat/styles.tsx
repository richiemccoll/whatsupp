import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';

export const Navbar = styled(Toolbar)`
  background-color: var(--primary-bg);
  color: var(--primary-text);
  font-size: 20px;
  font-weight: 700;
  line-height: 40px;
`;

export const Container = styled.div`
  height: 100vh;
`;
