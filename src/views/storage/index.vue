<script lang='ts' setup>
import { onMounted, ref, watch } from 'vue';
import { Goods, storageType, view } from '@/api/storage';

const type = ref('1');
const loading = ref(false);
const goodsInfo = ref<Goods[]>([]);

const onView = async () => {
  try {
    loading.value = true;
    const { data } = await view(type.value);
    data.goods_info.sort((a: Goods, b: Goods) => a.id - b.id);
    goodsInfo.value = data.goods_info;
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false;
  }

};

onMounted(() => {
  onView();
});

watch(type, () => {
  onView();
});
</script>

<template>
  <el-card shadow='never'>
    <el-select v-model='type'>
      <el-option
        v-for='(value, key) in storageType'
        :label='value'
        :value='key'
      />
    </el-select>
    <el-table
      v-loading='loading'
      :data='goodsInfo'
      style='width: 100%; margin-top: 24px'
    >
      <el-table-column type='index' width='50' />
      <el-table-column prop='id' label='编码' width='100' />
      <el-table-column prop='name' label='名称' width='200' />
      <el-table-column prop='num' label='数量' width='100' />
      <el-table-column prop='effect_desc' label='详情' />
      <el-table-column label='操作' width='100'>
        <template #default>
          <el-button link type='primary' size='small'>添加</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style scoped lang='less'>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-card {
}
</style>
