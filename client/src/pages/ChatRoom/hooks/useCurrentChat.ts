import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

export const getCurrentChatQuery = gql`
  query GetChat($chatId: ID!) {
    chat(chatId: $chatId) {
      id
      name
      picture
      messages {
        id
        content
        createdAt
      }
    }
  }
`;

export default function useCurrentChat(id: string) {
  const { data: { chat = null } = {} } = useQuery<any>(getCurrentChatQuery, {
    variables: { chatId: id },
  });

  return { chat };
}
