import {
  makeExecutableSchema,
  IExecutableSchemaDefinition
} from 'graphql-tools';
import { mergeSchemas } from 'apollo-server';
import merge from 'lodash/merge';
import {
  typeDefs as todoTypeDefs,
  resolvers as todoResolvers
} from '../modules/Todos';

const typeDefs = [todoTypeDefs];
const resolvers = merge({}, todoResolvers);

const schema = mergeSchemas({
  schemas: [
    makeExecutableSchema({
      typeDefs,
      resolvers
    } as IExecutableSchemaDefinition)
  ]
});

export default schema;
