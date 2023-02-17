import { request } from '@/util/request';

export const storageType = {
  1: '药品',
  2: '材料',
  3: '道具',
};

export interface Goods {
  id: number;
  icon_id: number;
  num: number;
  goods_validity: string;
  name: string;
  type: number;
  goods_type: number;
  effect_desc: string;
  goods_desc: string;
  subid: number;
  short_des: string;
  canabandon: number;
  canuse: number;
  canusebatch: number;
  target_url: string;
  confirm_msg: string;
  canconv: number;
}

export function view(type: string) {
  let params = {
    cmd: 'storage',
    op: 'view',
    type: type,
  };
  return request(params);
}

export function batch(id: number, num: number) {
  let params = {
    cmd: 'storage',
    op: 'batch',
    id: id,
    num: num,
  };
  return request(params);
}

export function use(id: number) {
  let params = {
    cmd: 'storage',
    op: 'use',
    id: id,
  };
  return request(params);
}

export function abandon(id: number) {
  let params = {
    cmd: 'storage',
    op: 'abandon',
    id: id,
  };
  return request(params);
}

export function exchange(exid: string, num: number) {
  let params = {
    cmd: 'storage',
    op: 'exchange',
    exid: exid,
    num: num,
    times: 100,
  };
  return request(params);
}
