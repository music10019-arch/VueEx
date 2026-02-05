<script setup>
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

const products = [
    new Product(1, '麥克雙牛堡', 100),
    new Product(2, '麥克雞塊餐', 120),
    new Product(3, '麥脆雞餐', 150),
];


</script>

<template>
    <div class="p-4">
        <h1>商品清單</h1>
        <div class="item-div">
            <div>
                "商品清單元件"
            </div>
        </div>
        <hr />
        <h2>購物車</h2>
        <ul>
            <li> 商品 - 價格 * 數量 </li>
        </ul>
    </div>
    總計：$00
</template>

<style scoped>
.item-div {
    display: flex;
    flex-wrap: wrap;
}
</style>