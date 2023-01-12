import axios from 'axios';
import { User } from '@/types/user';
import { useUserStore } from '@/store/modules/user';
import { ElMessage } from 'element-plus';

axios.defaults.baseURL = 'https://zone1.ledou.qq.com/fcgi-bin/petpk';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

const commonParams = {};

axios.interceptors.request.use((config) => {
  const userStore = useUserStore();
  console.log('qwe', JSON.stringify(userStore.currentUser));
  return config;
});

axios.interceptors.response.use((value) => {
  if (value.data.result === 110) {
    console.log(value.data.result);
    ElMessage(value.data.msg);
  }
  return value;
});

export function request(user: User | undefined, params: any): any {
  // if (!user) {
  //   router.push('/home').then(() => {});
  // }
  const data = {
    ...commonParams,
    ...params,
    ...user,
    ...{
      uid: '1373715',
      h5openid: '723468CA6AAB637021BFBAD8097D6758',
      h5token: '5BC3B215BAFBFE4F6BC6CECF2C789183',
    },
  };
  return axios.request({
    method: 'post',
    data,
  });
}
