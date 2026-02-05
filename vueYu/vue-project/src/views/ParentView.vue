<script setup>
import Child from '../components/Child.vue';

const titleMsg ="TEST";

function handleChildClick(data){
    console.log('處理子元件的觸發', data);
}

</script>

<template>

    <h1>我是父組件</h1>
    <hr />

    <Child @btn-clicked="handleChildClick($event)" :title="titleMsg" msg="訊息"></Child> <!-- 加了$event只會讀取按鈕第一筆參數 -->
    <Child :title="titleMsg" msg="訊息" :count=1000></Child>


</template>

<style scoped></style>