import nock from 'nock';
import { initialize } from './../../../test-utils/setup';
import { TodosAPI } from '../index';
import todos from './../../../mocks/todos.json';

describe('Todos RESTDatasource', () => {
  let todosAPI: TodosAPI;
  beforeAll(() => {
    todosAPI = initialize(TodosAPI);
  });

  it('should return todos', async () => {
    nock('https://jsonplaceholder.typicode.com')
      .get('/todos')
      .reply(200, todos);

    const response = await todosAPI.getTodos();
    expect(response).toMatchSnapshot();
  });
});
