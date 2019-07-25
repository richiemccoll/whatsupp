import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import * as fragments from '../../../fragments';

export const getCurrentChatQuery = gql`
  query GetChat($chatId: ID!) {
    chat(chatId: $chatId) {
      ...FullChat
    }
  }
  ${fragments.fullChat}
`;

export default function useCurrentChat(id: string) {
  const { data: { chat = null } = {} } = useQuery<any>(getCurrentChatQuery, {
    variables: { chatId: id },
  });

  return { chat };
}
