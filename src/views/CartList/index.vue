<script setup>
import { useCartStore } from '@/stores/cartStore'
const cartStore = useCartStore()
//单选回调
const singleCheck=(i,selected)=>{
    console.log(i,selected);
    cartStore.singleCheck(i.skuId,selected)
}
const allCheck=(selected)=>{
    cartStore.allCheck(selected)
}
</script>

<template>
  <div class="xtx-cart-page">
    <div class="container m-top-20">
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th width="120">
                  <!-- 全选框 -->
                <el-checkbox :model-value="cartStore.isAll" @change="allCheck"/>
              </th>
              <th width="400">商品信息</th>
              <th width="220">单价</th>
              <th width="180">数量</th>
              <th width="180">小计</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <!-- 商品列表 -->
          <tbody>
            <tr v-for="i in cartStore.cartList" :key="i.id">
              <td>
                <!-- 单选框 -->
                <el-checkbox :model-value="i.selected" @change="(selected)=>singleCheck(i,selected)"/>
              </td>
              <td>
                <div class="goods">
                  <RouterLink to="/"><img :src="i.picture" alt="" /></RouterLink>
                  <div>
                    <p class="name ellipsis">
                      {{ i.name }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>&yen;{{ i.price }}</p>
              </td>
              <td class="tc">
                <el-input-number v-model="i.count" />
              </td>
              <td class="tc">
                <p class="f16 red">&yen;{{ (i.price * i.count).toFixed(2) }}</p>
              </td>
              <td class="tc">
                <p>
                  <el-popconfirm title="确认删除吗?" confirm-button-text="确认" cancel-button-text="取消" @confirm="delCart(i)">
                    <template #reference>
                      <a href="javascript:;">删除</a>
                    </template>
                  </el-popconfirm>
                </p>
              </td>
            </tr>
            <tr v-if="cartStore.cartList.length === 0">
              <td colspan="6">
                <div class="cart-none">
                  <el-empty description="购物车列表为空">
                    <el-button type="primary">随便逛逛</el-button>
                  </el-empty>
                </div>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
      <!-- 操作栏 -->
      <div class="action">
        <div class="batch">
          共 {{cartStore.allCount}} 件商品，已选择 {{cartStore.selectedCount}} 件，商品合计：
          <span class="red">¥ {{cartStore.selectedPrice.toFixed(2)}} </span>
        </div>
        <div class="total">
          <el-button size="large" type="primary" @click="$router.push('/checkout')">下单结算</el-button>
        </div>
      </div>
    </div>
  </div>
</template>