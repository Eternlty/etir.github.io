import axios from 'axios';
import { useUserStore } from '@/store/modules/user';
import { ElMessage } from 'element-plus';

axios.defaults.baseURL = 'https://zone1.ledou.qq.com/fcgi-bin/petpk';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

const commonParams = {
  pf: 'sq',
  from: '1',
};

axios.interceptors.request.use((config) => {
  const userStore = useUserStore();
  const currentUser = userStore.getCurrentUser;
  if (currentUser.uid) {
    config.data = {
      ...{
        uid: currentUser.uid,
        h5openid: currentUser.openid,
        h5token: currentUser.token,
      },
      ...config.data,
    };
  }
  return config;
});

axios.interceptors.response.use((value) => {
  if (value.data.result === 110) {
    ElMessage(value.data.msg);
  }
  return value;
});

export function request(params: {}): any {
  const data = {
    ...commonParams,
    ...params,
  };
  return axios.request({
    method: 'post',
    data,
  });
}
