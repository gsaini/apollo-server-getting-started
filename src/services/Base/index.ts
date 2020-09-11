import { RESTDataSource } from 'apollo-datasource-rest';

export default class Service extends RESTDataSource {
  constructor(baseUrl: string) {
    super();
    this.baseURL = baseUrl;
  }

  async getData<T>(path: string): Promise<T> {
    const response = await this.get(path);
    return response;
  }
}
