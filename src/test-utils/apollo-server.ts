import { ApolloServer } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import schema from '../schema'; // import existing schema & datasource to utilize the same in test scenarios as well...
import dataSources from '../services'; // services/api's

const createApolloTestServer = () => {
  const server = new ApolloServer({
    schema,
    dataSources,
    debug: true,
    context: () => {
      // Important: request context is not available during jest testing, hence mocked the request context here.
      return { token: 'foo' };
    }
  });
  return server;
};

const apolloServer = createApolloTestServer();

export const { query, mutate } = createTestClient(apolloServer);
