import React, { useState, useMemo } from 'react';

const App: React.FC = () => {
  const [chats, setChats] = useState<any[]>([]);

  useMemo(async () => {
    const body = await fetch('/chats');
    const chats = await body.json();
    setChats(chats);
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <section>{JSON.stringify(chats)}</section>
    </div>
  );
};

export default App;
