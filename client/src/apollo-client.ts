import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_SERVER_URL + '/graphql',
});

const inMemoryCache = new InMemoryCache();

export default new ApolloClient({
  link: httpLink,
  cache: inMemoryCache,
});
