<script setup>

import { useRoute } from 'vue-router';

// 兩種寫法
// 1. 主動從網址抓取參數
const route = useRoute();
console.log(route); // 觀察路徑

// 2. 被動接收父元件傳入
const props = defineProps({
    id: String
})

</script>

<template>


    <h1>Content1</h1>

    <!-- 方法不一樣，但結果一樣 -->
    <p>{{ route.params.id }}</p> <!-- 主動從網址抓取參數 -->
    <p>{{ props.id }}</p> <!-- 被動接收父元件傳入 -->
</template>

<style scoped></style>