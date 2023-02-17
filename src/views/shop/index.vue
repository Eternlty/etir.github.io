<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { buy, CommodityInfo, shop, ShopInfo, shopType } from '@/api/shop';
import { Search } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

const shopModel = reactive({
  shopType: '12',
});

const loading = ref(false);
const shopInfo = ref<ShopInfo>({
  commodity_info: [],
  winpoint: 0,
  servant_cash: 0,
  cave_point: 0,
  king_medal: 0,
  doushen_medal: 0,
  internal_force: 0,
  doudou: 0,
  gzwulin_score: 0,
  fragment: 0,
  shen_bing_coin: 0,
  jewel_num: 0,
  king_jingpo_num: 0,
  chrono_card_num: 0,
  honor: '',
  skin_point: 0,
});
const search = ref('');

const onShop = async () => {
  loading.value = true;
  const { data } = await shop(shopModel.shopType);
  shopInfo.value = data;
  loading.value = false;
};

const handleBuy = async (item: CommodityInfo) => {
  const { data } = await buy(
    item.goods_type,
    item.id,
    item.remain,
    item.remain * item.prime_price
  );
  if (data.result === 0) {
    ElMessage('购买[' + item.name + '*' + item.remain + ']成功');
    onShop();
  } else {
    ElMessage({ message: data.msg, type: 'error' });
  }
};

onMounted(() => {
  onShop();
});

watch(shopModel, () => {
  onShop();
});

const filterCommodityInfo = computed(() => {
  return shopInfo.value.commodity_info.filter(
    (item) => !search.value || item.name.includes(search.value)
  );
});
</script>

<template>
  <div>
    <el-card shadow="never">
      <el-row>
        <el-col :span="3">
          <el-statistic title="斗豆" :value="shopInfo.doudou" />
        </el-col>
        <el-col :span="3">
          <el-statistic title="胜点" :value="shopInfo.winpoint" />
        </el-col>
        <el-col :span="3">
          <el-statistic title="洞穴" :value="shopInfo.cave_point" />
        </el-col>
        <el-col :span="3">
          <el-statistic title="斗神" :value="shopInfo.doushen_medal" />
        </el-col>
        <el-col :span="3">
          <el-statistic title="家财" :value="shopInfo.servant_cash" />
        </el-col>
        <el-col :span="3">
          <el-statistic title="王者" :value="shopInfo.king_medal" />
        </el-col>
        <el-col :span="3">
          <el-statistic
            title="king_jingpo_num"
            :value="shopInfo.king_jingpo_num"
          />
        </el-col>
      </el-row>
    </el-card>
    <el-card shadow="never" style="margin-top: 24px">
      <el-row
        ><el-col :span="4"
          ><el-select v-model="shopModel.shopType">
            <el-option
              v-for="(value, key) in shopType"
              :key="key"
              :label="value"
              :value="key"
            /> </el-select
        ></el-col>
        <el-col :span="4">
          <el-input placeholder="搜索" v-model="search" :suffix-icon="Search" />
        </el-col>
      </el-row>
      <el-table
        v-loading="loading"
        :data="filterCommodityInfo"
        style="width: 100%; margin-top: 24px"
      >
        <el-table-column type="index" width="50" />
        <el-table-column prop="goods_id" label="编码" width="100" />
        <el-table-column prop="name" label="名称" width="200" />
        <el-table-column label="限制" width="100">
          <template #default="scope"> VIP{{ scope.row.vip_level }}</template>
        </el-table-column>
        <el-table-column prop="price" label="价格" width="100" />
        <el-table-column prop="remain" label="库存" width="100" />
        <el-table-column prop="goods_effect" label="详情" />
        <el-table-column label="操作" width="150">
          <template #default="scope">
            <el-button link type="primary" @click="handleBuy(scope.row)"
              >购买</el-button
            >
            <el-button link type="primary">添加</el-button>
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
</style>
