import { request } from '@/util/request';

export function index() {
  let params = {
    cmd: 'index',
  };
  return request(params);
}
