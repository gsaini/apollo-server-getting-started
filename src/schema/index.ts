import {
  makeExecutableSchema,
  IExecutableSchemaDefinition
} from 'graphql-tools';
import { mergeSchemas } from 'apollo-server';
import merge from 'lodash/merge';
import {
  typeDefs as bookTypeDefs,
  resolvers as bookResolvers
} from '../modules/Books';

const typeDefs = [bookTypeDefs];
const resolvers = merge({}, bookResolvers);

const schema = mergeSchemas({
  schemas: [
    makeExecutableSchema({
      typeDefs,
      resolvers
    } as IExecutableSchemaDefinition)
  ]
});

export { typeDefs, resolvers };
export default schema;
