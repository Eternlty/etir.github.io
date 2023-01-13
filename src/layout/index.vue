<script setup lang="ts">
import TumoAside from '@/layout/TumoAside/index.vue';
import TumoHeader from '@/layout/TumoHeader/index.vue';
import { computed } from '_vue@3.2.45@vue';
import { useAppStore } from '@/store/modules/app';

const opened = computed(() => useAppStore().getSidebarStatus);
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <tumo-header />
      </el-header>
      <el-container>
        <el-aside v-if="opened">
          <tumo-aside />
        </el-aside>
        <el-main :class="opened ? 'el-main-open' : 'el-main-close'">
          <router-view></router-view>
        </el-main>
        <el-backtop :right="100" :bottom="100" />
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less"></style>
