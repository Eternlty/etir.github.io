<template>
  <div class="tumo-header">
    <div class="tumo-header-left">
      <el-icon @click="toggleSidebar">
        <Fold v-if='opened' />
        <Expand v-else/>
      </el-icon>
      后台
    </div>
    <div class="tumo-header-right">
      <el-dropdown>
        <span class="tumo-dropdown-link">
          <el-image
            src="http://thirdqq.qlogo.cn/qqapp/1105748669/723468CA6AAB637021BFBAD8097D6758/40"
          />
          <span> {{ userStore.currentUser.name }} </span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>用户中心</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-icon>
        <Setting />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user';
import { Fold, Setting, Expand } from '@element-plus/icons-vue';
import { useAppStore } from '@/store/modules/app';
import { computed } from 'vue';

const userStore = useUserStore();
const appStore = useAppStore();

const opened = computed(() => appStore.getSidebarStatus)
const user = computed(() => userStore.getCurrentUser)

console.log(user)

const toggleSidebar = () => {
  appStore.toggleSidebar();
};
</script>

<style scoped lang="less">
.tumo-header {
  height: 48px;
  overflow: hidden;
  position: relative;
  line-height: 48px;
  background: #ffffff;
  color: #606266;
  width: 100%;
  border-bottom: 1px solid #dcdfe6;

  .el-icon {
    width: 48px;
    height: 48px;
    cursor: pointer;
  }

  .tumo-header-left {
    padding-left: 24px;
    float: left;

    :hover {
      background: #ecf5ff;
    }
  }

  .tumo-header-right {
    padding-right: 24px;
    display: flex;
    height: 48px;
    align-items: center;
    justify-content: flex-end;

    :hover {
      background: #ecf5ff;
    }

    .tumo-dropdown-link {
      height: 48px;
      padding-left: 10px;
      padding-right: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;

      p {
        font-size: 14px;
      }

      .el-image {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}
</style>
