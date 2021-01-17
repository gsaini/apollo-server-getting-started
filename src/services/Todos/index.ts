import Service from '../Base';
import { ToDo, TodoMutationInputArgs } from '../../types';

class TodosAPI extends Service {
  constructor() {
    super('https://jsonplaceholder.typicode.com');
  }

  async getTodos(): Promise<ToDo[]> {
    return this.getData('/todos');
  }

  async updateTodo(todo: TodoMutationInputArgs): Promise<ToDo> {
    return this.put(`/todos/${todo.id}`, todo);
  }
}

export { TodosAPI };
