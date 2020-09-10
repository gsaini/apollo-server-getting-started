export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  books: Maybe<Array<Maybe<Book>>>;
  todos: Maybe<Array<Maybe<ToDo>>>;
  getAuthorBooks: Maybe<Array<Maybe<Book>>>;
};


export type QuerygetAuthorBooksArgs = {
  author: Maybe<Scalars['String']>;
};

export type Mutation = {
  updateTodo: Maybe<ToDo>;
  addBook: Maybe<Book>;
};


export type MutationupdateTodoArgs = {
  id: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};


export type MutationaddBookArgs = {
  title: Maybe<Scalars['String']>;
  author: Maybe<Scalars['String']>;
};

export type Book = {
  title: Maybe<Scalars['String']>;
  author: Maybe<Scalars['String']>;
};

export type Author = {
  title: Maybe<Scalars['String']>;
};

export type ToDo = {
  id: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};
