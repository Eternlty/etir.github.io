<script setup lang='ts'>
import { ref } from 'vue';
import { request } from '@/util/request';
import { useUserStore } from '@/store/modules/user';
import { User } from '@/types/user';
import { ElMessage } from 'element-plus';

const keys = ['h5openid', 'h5token'];

const cookie = ref('');

const splitCookie = () => {
  let token: any = {};
  cookie.value.split(';').forEach((item) => {
    let arr = item.trim().split('=');
    if (keys.includes(arr[0])) {
      token[arr[0]] = arr[1];
    }
  });
  return token;
};

const login = async () => {
  if (!cookie.value) return
  try {
    let token = splitCookie();
    const { data } = await request(token);
    if (data.result === 0) {
      useUserStore().setCurrentUser(data as User);
    } else {
      ElMessage(data.msg)
    }
  } catch (e) {
  }
};
</script>

<template>
  <div>
    <el-input
      v-model='cookie'
      :rows='2'
      type='textarea'
      placeholder='Please input cookie'
    />
    <el-button @click='login' type='primary'>Primary</el-button>
  </div>
</template>

<style scoped lang='less'></style>
