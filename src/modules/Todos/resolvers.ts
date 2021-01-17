import { ToDo, TodoMutationInputArgs } from '../../types';
import { TodosAPI } from './../../services/Todos';

// Resolvers define the technique for fetching the types defined in the
// schema.
export const resolvers = {
  Query: {
    todos: async (
      _: unknown,
      __: unknown,
      { dataSources }: { dataSources: { TodosAPI: TodosAPI } }
    ): Promise<ToDo[]> => {
      const todos = await dataSources.TodosAPI.getTodos();

      return todos;
    }
  },
  Mutation: {
    updateTodo: async (
      _: unknown,
      args: TodoMutationInputArgs,
      { dataSources }: { dataSources: { TodosAPI: TodosAPI } }
    ): Promise<ToDo> => {
      const updatedTodo = await dataSources.TodosAPI.updateTodo(args);

      return updatedTodo;
    }
  }
};
