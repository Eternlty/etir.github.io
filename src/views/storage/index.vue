<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';
import {
  abandon,
  batch,
  exchange,
  Goods,
  storageType,
  use,
  view,
} from '@/api/storage';
import { ElMessage } from 'element-plus';
import { Search } from '@element-plus/icons-vue';

const type = ref('1');
const loading = ref(false);
const goodsInfo = ref<Goods[]>([]);
const visible = ref(false);
const search = ref('');
const form = reactive({
  id: 0,
  name: '',
  max: 1000,
  num: 0,
});

const onView = async () => {
  try {
    loading.value = true;
    const { data } = await view(type.value);
    data.goods_info.sort((a: Goods, b: Goods) => a.id - b.id);
    goodsInfo.value = data.goods_info;
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};

const handleBatchUse = async (row: Goods) => {
  visible.value = true;
  form.id = row.id;
  form.max = row.num;
  form.name = row.name;
  form.num = 0;
};

const handleUse = async (row: Goods) => {
  const { data } = await use(row.id);
  if (data.result === 0) {
    ElMessage('物品使用成功!');
    onView();
  } else {
    ElMessage({
      message: data.msg,
      type: 'error',
    });
  }
};

const handleAbandon = async (row: Goods) => {
  const { data } = await abandon(row.id);
  if (data.result === 0) {
    ElMessage('物品丢弃成功!');
    onView();
  } else {
    ElMessage({ message: data.msg, type: 'error' });
  }
};

const handleExchanege = async (exid: string, num: number) => {
  const { data } = await exchange(exid, num);
  if (data.result === 0) {
    ElMessage('兑换成功');
    onView();
  } else {
    ElMessage({ message: data.msg, type: 'error' });
  }
};

const handleCommonCmd = async (row: Goods) => {
  const arr = row.target_url.split('|');
  const cmd = arr[0];
  const exid = arr[1];
  switch (cmd) {
    case 'hf.CommonExchangeCmd':
      await handleExchanege(exid, row.num);
      break;
    default:
      ElMessage({ message: '不支持的操作[' + cmd + ']', type: 'error' });
  }
};

const submit = async () => {
  const { data } = await batch(form.id, form.num);
  if (data.result === 0) {
    ElMessage('批量使用成功!');
  } else {
    ElMessage({
      message: data.msg,
      type: 'error',
    });
  }
};

onMounted(() => {
  onView();
});

watch(type, () => {
  onView();
});

const filterGoodsList = computed(() => {
  return goodsInfo.value.filter(
    (item) => !search.value || item.name.includes(search.value)
  );
});
</script>

<template>
  <div>
    <el-card shadow="never">
      <el-row>
        <el-col :span="4">
          <el-select v-model="type">
            <el-option
              v-for="(value, key) in storageType"
              :key="key"
              :label="value"
              :value="key"
            />
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-input placeholder="搜索" v-model="search" :suffix-icon="Search" />
        </el-col>
      </el-row>
      <el-table
        v-loading="loading"
        :data="filterGoodsList"
        style="width: 100%; margin-top: 24px"
      >
        <el-table-column type="index" width="50" />
        <el-table-column prop="id" label="编码" width="100" />
        <el-table-column prop="name" label="名称" width="200" />
        <el-table-column prop="num" label="数量" width="100" />
        <el-table-column prop="effect_desc" label="详情" />
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button
              type="primary"
              v-if="scope.row.target_url"
              link
              @click="handleCommonCmd(scope.row)"
            >
              兑换
            </el-button>
            <el-button
              v-if="!scope.row.target_url && scope.row.canuse === 1"
              link
              type="primary"
              @click="handleUse(scope.row)"
              >使用</el-button
            >
            <el-button
              v-if="!scope.row.target_url && scope.row.canusebatch === 1"
              link
              type="primary"
              @click="handleBatchUse(scope.row)"
              >批量使用</el-button
            >
            <el-button
              v-if="scope.row.canabandon === 1"
              link
              type="danger"
              @click="handleAbandon(scope.row)"
              >丢弃</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog v-model="visible" title="确定使用" width="30%">
      <el-form :model="form">
        <el-form-item label="名称">
          <span>{{ form.name }}</span>
        </el-form-item>
        <el-form-item label="数量">
          <el-input-number v-model="form.num" :max="form.max" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="submit"> 使用 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped lang="less">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
