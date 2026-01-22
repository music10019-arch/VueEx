<script setup>
// 響應式 好處:自動觸發更新
import {ref} from 'vue';  //引入ref，為內建的函式，自設參考型別，來響應單一值
const mycount = ref(1);  
function addCount() {
    mycount.value--;   //要轉value因為ref 回傳的不是數字本身，而是一個包著數字的物件。    
    }
///////////////////////////////////////////////
import { reactive } from 'vue'; //響應整個物件結構
const style = reactive({ 
    "color":'red',
    "fontSize":'30px'
})
function changeColor () {
    const colors = ['purple','blue','green','indigo','pink'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    style.color=colors[randomIndex];
    style.fontSize='50px';
}
</script>
<template>

    <button @click="addCount">{{mycount}}</button>
    <button @click="changeColor()"     :style="style">{{style.color}}</button>
<!-- 記得 這邊{{}} 裡面放 "變數" 好神奇!   -->

</template>
<style scoped>

</style>
