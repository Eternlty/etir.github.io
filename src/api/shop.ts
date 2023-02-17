import { request } from '@/util/request';

export const shopType = {
  3: '胜点',
  4: '家财',
  5: '洞穴',
  6: '王者',
  8: '斗神',
  16: '圣物',
  17: '高级精华',
  25: '特级精华',
};

export interface ShopInfo {
  commodity_info: CommodityInfo[];
  winpoint: number;
  servant_cash: number;
  cave_point: number;
  king_medal: number;
  doushen_medal: number;
  internal_force: number;
  doudou: number;
  gzwulin_score: number;
  fragment: number;
  shen_bing_coin: number;
  jewel_num: number;
  king_jingpo_num: number;
  chrono_card_num: number;
  honor: string;
  skin_point: number;
}

export interface CommodityInfo {
  id: number;
  goods_id: number;
  goods_num: number;
  name: string;
  subtype: number;
  price: number;
  prime_price: number;
  default_num: number;
  max_num: number;
  seq: number;
  limit_type: number;
  front_need: number;
  vip_level: number;
  remain: number;
  goods_type: number;
  iconId: number;
  goods_des: string;
  goods_effect: string;
}

export function shop(shopType: string) {
  let params = {
    cmd: 'shop',
    shoptype: shopType,
  };
  return request(params);
}

export function buy(subtype: number, id: number, num: number, price: number) {
  let params = {
    cmd: 'shop',
    subtype: subtype,
    num: num,
    id: id,
    price: price,
  };
  return request(params);
}
