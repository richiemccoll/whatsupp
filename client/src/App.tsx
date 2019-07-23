import React from 'react';
import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom';

import ChatList from './pages/Chat';
import ChatRoom from './pages/ChatRoom';
import { SwitchTransition } from './App.styles';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SwitchTransition>
          <Route
            exact
            path="/chats/:chatId"
            component={({
              match,
              history,
            }: RouteComponentProps<{ chatId: string }>) => (
              <ChatRoom chatId={match.params.chatId} history={history} />
            )}
          />
          <Route exact path="/" component={ChatList} />
        </SwitchTransition>
      </BrowserRouter>
    </div>
  );
}
