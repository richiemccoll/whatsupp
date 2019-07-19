import React from 'react';

import ChatList from './pages/Chat';
import { Navbar } from './App.styles';

export default function App() {
  return (
    <div className="App">
      <Navbar>Whatsupp</Navbar>
      <ChatList />
    </div>
  );
}
