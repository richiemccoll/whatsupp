import React from 'react';
import ReactDOM from 'react-dom';
import {
  MuiThemeProvider as ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

import './index.css';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#5fc9e4' },
    secondary: { main: '#795fe4' },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
