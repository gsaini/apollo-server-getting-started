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
  todos: Maybe<Array<Maybe<ToDo>>>;
};

export type ToDo = {
  id: Scalars['ID'];
  title: Maybe<Scalars['String']>;
  completed: Maybe<Scalars['Boolean']>;
};
