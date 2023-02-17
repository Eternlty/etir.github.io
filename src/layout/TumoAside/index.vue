<script setup lang="ts">
import { Edit, House, Menu, Setting } from '@element-plus/icons-vue';
import { onMounted } from 'vue';
</script>

<template>
  <el-menu router :default-active="$route.path">
    <el-menu-item index="/home">
      <el-icon>
        <House />
      </el-icon>
      <span>主页</span>
    </el-menu-item>
    <el-menu-item index="/shop">
      <el-icon>
        <Menu />
      </el-icon>
      <span>商店</span>
    </el-menu-item>
    <el-menu-item index="/storage">
      <el-icon>
        <Edit />
      </el-icon>
      <span>背包</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped lang="less">
.el-menu {
  height: calc(~'100vh - 48px');
}
</style>
