import { gql } from 'apollo-server';

export const GET_TODOS = gql`
  query {
    todos {
      id
      title
      completed
    }
  }
`;
