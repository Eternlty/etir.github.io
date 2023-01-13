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
