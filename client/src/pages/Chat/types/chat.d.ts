export type Chat = {
  id: string;
  name: string;
  picture: string;
  lastMessage: {
    content: string;
    createdAt: string;
  };
};

export type ChatList = Array<Chat>;
