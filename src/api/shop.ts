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

export function shopList(shopType: string) {
  let params = {
    cmd: 'shop',
    shoptype: shopType,
  };
  return request(params);
}
