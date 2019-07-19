import { messages } from './messages';

export const chats = [
  {
    id: '1',
    name: 'Ethan Gonzalez',
    picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
    lastMessage: messages.find(m => m.id === 1),
  },
  {
    id: '2',
    name: 'Bryan Wallace',
    picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
    lastMessage: messages.find(m => m.id === 2),
  },
  {
    id: '3',
    name: 'Avery Stewart',
    picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
    lastMessage: messages.find(m => m.id === 3),
  },
  {
    id: '4',
    name: 'Katie Peterson',
    picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
    lastMessage: messages.find(m => m.id === 4),
  },
  {
    id: '5',
    name: 'John McPherson',
    picture: 'https://randomuser.me/api/portraits/thumb/men/4.jpg',
    lastMessage: messages.find(m => m.id === 5),
  },
];
