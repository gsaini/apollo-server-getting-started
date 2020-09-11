import { gql } from 'apollo-server';
import { ToDo } from '../../types';
import { TodosAPI } from './../../services/Todos';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type ToDo {
    id: ID!
    title: String
    completed: Boolean
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "todos" query returns an array of zero or more Todos (defined above).
  type Query {
    todos: [ToDo]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema.
const resolvers = {
  Query: {
    todos: async (
      _: {},
      __: {},
      { dataSources }: { dataSources: { TodosAPI: TodosAPI } }
    ): Promise<ToDo[]> => {
      const todos = await dataSources.TodosAPI.getTodos();
      return todos;
    }
  }
};

export { typeDefs, resolvers };
