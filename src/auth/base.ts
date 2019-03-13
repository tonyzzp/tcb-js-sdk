import { Request } from '../lib/request';
import { Cache } from '../lib/cache';
import { JWT_KEY, Config } from '../types';

export default class {
  httpRequest: Request;
  cache: Cache;

  constructor(config: Config) {
    this.httpRequest = new Request(config);
    this.cache = new Cache();
  }

  signOut() {
    this.cache.removeStore(JWT_KEY);
  }

  protected traceUser(): any {
    const action = 'auth.traceUser';

    return this.httpRequest.send(action, {});
  }

  protected getJwt(): any {
    const action = 'auth.getJwt';

    return this.httpRequest.send(action, {});
  }
}