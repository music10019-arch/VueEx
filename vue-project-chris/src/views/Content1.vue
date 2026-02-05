<script setup>
// import ProjButton from '@/components/ProjButton.vue';
// import { useCounterStore } from '@/stores/counter';
import { useRoute } from 'vue-router';

// // 兩種寫法
// // 1. 主動從網址抓取參數
// const route = useRoute();   //記: useRoute 就是抓參數 
// console.log(route); // 觀察路徑

// 2. 被動接收父元件傳入
const props = defineProps({
    id: String
})

// const counterStore = useCounterStore();
// counterStore.addCount();
// counterStore.count;
// counterStore.doubleCount;

</script>

<template>


    <h1>Content1</h1>
    <!-- <p>{{ route.params.id }}</p> -->
    <!-- 主動從網址抓取參數 parameter -->
    <!-- 方法不一樣，但結果一樣 -->
    <p>被動接收父元件傳入的東西(這邊是id):{{ props.id }}</p>


    <!-- <hr />
    <div>計數:{{ counterStore.count }}</div>
    <div>計數*2:{{ counterStore.doubleCount }}</div>
    <button type="submit" @click="counterStore.addCount()"> </button> -->
</template>

<style scoped></style>