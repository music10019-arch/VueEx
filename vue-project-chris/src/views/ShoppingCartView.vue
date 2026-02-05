<!-- 父層 -->
<script setup>
import { ref, computed } from "vue";
import { Product } from "../common/products";
import ProductItem from "@/components/ProductItem.vue";
import { Cart } from "@/common/cart";

const products = ref([
  new Product(1, "麥克雙牛堡", 100),
  new Product(2, "麥克雞塊餐", 120),
  new Product(3, "麥脆雞餐", 150),
]);

// 建立一個響應式購物車
const cartList = ref([]);

function add(product) {
  const existingCart = 
    cartList.value.find((x) => x.id === product.id);

  if (!!existingCart) {
    existingCart.count++;
    // 如果不存在有cartlist 才家
  } else {
    const cart = new Cart(product.id, product.name, product.price, 1);
    cartList.value.push(cart);
  }
}

// 總計用 computed 自動計算 也是響應式的計算屬性
// array.reduce(
// (accumulator, currentValue, *index, *array) => 
// {新的 accumulator}, initialValue);

const total = computed(() => {
    return cartList.value.reduce
    ((sum, item) => sum + item.price * item.count, 0)
    }
);  

const a = new Cart(1, "Text", 100, 2);
</script>

<template>
  <div class="p-4">
    <h1>商品清單</h1>
    <div class="item-div">
      <div v-for="(value, index) in products" :key="value.id">
        <ProductItem :product="value" @add="add($event)"></ProductItem>
        <!-- @add 是對應子層裡 emit("add", ...) 的事件名稱 -->
      </div>
    </div>
    <hr />

    <!-- ============= -->
    <h2>購物車</h2>
    <ul>
      <li v-for="(cart, index) in cartList" :key="cart.id">
        {{ cart.name }} - {{ cart.price }} x {{ cart.count }}
      </li>
    </ul>
  </div>

  <div>總計：{{total}}</div>
</template>

<style scoped>
.item-div {
  display: flex;
  flex-wrap: wrap;
}
</style>
