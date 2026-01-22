<script setup>

const divClick = () =>alert('點擊Div');
const btnClick = () =>alert('點擊按鈕');


</script>

<template>

    <div @click="divClick">

        <button @click="btnClick">點擊按鈕</button>

    </div>


</template>

<style scoped>


</style>
