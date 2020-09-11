import { InMemoryLRUCache } from 'apollo-server-caching';
import BaseService from '../services/Base';

/**
 * Initialize the service.
 * NOTE:
 * ==================================
 * We need to initialize service (dataSource) manually as if it's used through apollo server, apollo server also do the same.
 * ==================================
 * @param Service
 */
export const initialize = <T extends BaseService>(Service: new () => T): T => {
  const service = new Service();

  service.initialize({
    context: {},
    cache: new InMemoryLRUCache()
  });
  return service;
};
