<script setup>

    const msg = "本文插值";
    const i = 1;

    // 箭頭函式
    const getNumber=()=>{
        return i;
    }

    // 以前的寫法
    // document.querySelector("#id").textContent="本文插值";
    // document.getElementById("id").append("本文插值");
    // 現在寫在template裡面雙大括號{{}}，叫做Mustache語法

</script>
<template>

    <p id="id">{{ msg }}</p> <!-- 本文插值 -->
    <p>{{ i + 1 }}</p> <!-- 2 -->
    <p>{{ getNumber() }}</p> <!-- 1 -->
    <p>{{ i >= 0 ? '有值' : '無值' }}</p> <!-- 有值 -->

</template>
<style scoped>
    p {
        color: blue;
    }
</style>