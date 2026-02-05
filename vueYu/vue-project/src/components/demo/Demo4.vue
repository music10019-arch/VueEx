<script setup>

    const printLog =(eventObj)=>{
        console.log('print success');
        console.log(eventObj);
    }
    const printLog1 =(obj, name)=>{
        console.log('print success');
        console.log(obj);
        console.log(name);
    }

    
    // 舊寫法
    // document.querySelector('button').addEventListener('click',printLog);
</script>
<template>

    <button v-on:click="printLog">按鈕Method</button>
    <!-- Vue 預設傳進來的第一個東西就是event，所以eventObj會拿到事件物件 -->

    <button v-on:click="printLog1($event, 'Sean')">按鈕Inline</button>

    <button v-on:click="(e)=>printLog1(e,'Arthur')">按鈕Inline</button>
    <!-- e是第一個參數，所以會收到Vue預設傳進來的第一個物件event -->

</template>
<style scoped>
    
</style>