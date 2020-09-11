import Service from '../Base';
import { ToDo } from '../../types';

class TodosAPI extends Service {
  constructor() {
    super('https://jsonplaceholder.typicode.com');
  }

  async getTodos(): Promise<ToDo[]> {
    return this.getData('/todos');
  }
}

export { TodosAPI };
