<template>
  <el-card v-for="user in userList" :key="user.uid">
    {{ user.name }}
  </el-card>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user';
import { computed } from 'vue';

const userStore = useUserStore();

const userList = computed(() => userStore.userList);
</script>

<style scoped></style>
