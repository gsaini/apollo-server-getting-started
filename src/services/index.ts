import { TodosAPI } from './Todos';

const dataSources = (): {
  TodosAPI: object;
} => ({
  TodosAPI: new TodosAPI()
});

export default dataSources;
