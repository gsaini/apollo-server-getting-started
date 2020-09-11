import nock from 'nock';
import { query as useQuery } from './../../../test-utils/apollo-server';
import { GET_TODOS } from './gql';
import todos from './../../../mocks/todos.json';

describe('Todos Module', () => {
  it('should return todos', async () => {
    nock('https://jsonplaceholder.typicode.com')
      .get('/todos')
      .reply(200, todos);

    const response = await useQuery({ query: GET_TODOS });
    expect(response).toMatchSnapshot();
  });
});
