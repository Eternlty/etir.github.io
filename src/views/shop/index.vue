<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import { shopList, shopType } from '@/api/shop';

const tableData = [
  {
    id: 100023,
    goods_id: 100006,
    goods_num: 1,
    name: '黄金卷轴',
    subtype: 0,
    price: 20,
    prime_price: 20,
    default_num: 1,
    max_num: 6,
    seq: 2,
    limit_type: 0,
    front_need: 0,
    vip_level: 0,
    remain: 6,
    goods_type: 1,
    iconId: 100006,
    goods_des: '金光闪闪的卷轴，似乎隐藏着什么修炼秘诀…',
    goods_effect: '可强化技能和武器，增强战斗实力。',
  },
];

const shopModel = reactive({
  shopType: '12',
});

const loading = ref(false);
const shopData = ref([]);

const onFetchShopList = async () => {
  loading.value = true;
  const { data } = await shopList(shopModel.shopType);
  shopData.value = data.commodity_info;
  loading.value = false;
};

onMounted(() => {
  onFetchShopList();
});
</script>

<template>
  <div>
    <el-card shadow="never">
      <el-form :inline="false" :model="shopModel">
        <el-form-item label="商店：">
          <el-select v-model="shopModel.shopType">
            <el-option
              v-for="(value, key) in shopType"
              :label="value"
              :value="key"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onFetchShopList">Query</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card shadow="never" style="margin-top: 24px">
      <el-table v-loading="loading" :data="shopData" style="width: 100%">
        <el-table-column type="index" width="50" />
        <el-table-column prop="goods_id" label="编码" width="100" />
        <el-table-column prop="name" label="名称" width="200" />
        <el-table-column label="限制" width="100" >
          <template #default='scope'>
            VIP{{scope.row.vip_level}}
          </template>
        </el-table-column>
        <el-table-column prop="price" label="价格" width="100" />
        <el-table-column prop="remain" label="库存" width="100" />
        <el-table-column prop="goods_effect" label="详情" />
        <el-table-column label="操作" width="100">
          <template #default>
            <el-button link type="primary" size="small">添加</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style scoped lang="less">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-card {
}
</style>
