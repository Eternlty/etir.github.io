import { request } from '@/util/request';

export function index(token: {}) {
  let params = {
    cmd: 'index',
    ...token,
  };
  return request(params);
}
