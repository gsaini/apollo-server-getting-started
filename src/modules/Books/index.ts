import { gql } from 'apollo-server';
import { Book, ToDo } from './../../types';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  type Author {
    title: String
  }

  type ToDo {
    id: String
    type: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    todos: [ToDo]
    getAuthorBooks(author: String): [Book]
  }

  type Mutation {
    updateTodo(id: String, type: String): ToDo
    addBook(title: String, author: String): Book
  }
`;

const books: Book[] = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
];

const todos: ToDo[] = [
  {
    id: '1',
    type: 'foo'
  },
  {
    id: '2',
    type: 'bar'
  }
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    todos: () => todos,
    getAuthorBooks: (_: {}, { author }: Book) => {
      return books.filter((book) => book.author === author);
    }
  },
  Mutation: {
    updateTodo: (_: {}, { id, type }: ToDo) => {
      const todo = todos.find((todo) => todo.id === id);
      if (todo) {
        todo.type = type;
      }

      return todo;
    },
    addBook: (_: {}, { title, author }: Book) => {
      const book = { title, author };
      books.push(book);

      return book;
    }
  }
};

export { typeDefs, resolvers };
