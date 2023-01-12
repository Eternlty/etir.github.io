<script setup lang='ts'>
import TumoAside from '@/layout/TumoAside/index.vue';
import TumoHeader from '@/layout/TumoHeader/index.vue';
</script>

<template>
  <div class='common-layout'>
    <el-container>
      <el-header>
        <tumo-header />
      </el-header>
      <el-container>
        <el-aside>
          <tumo-aside />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang='less'>
.el-header {
  padding: 0;
  height: 48px;
}


</style>
