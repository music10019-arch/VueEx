<script setup>

// logic => myId

const dynamicId = "myId1";

const url= "https://www.google.com.tw";
const target1 ="_blank"

const isDisabled = true;

const attrObj = { "key": "value", "style": "color:red" };
// 兩種寫法.和[]
attrObj.id = "myId";
attrObj["class"]="myClass"; // 用於屬性名稱包含特殊字元或從變數傳進來時

console.log(attrObj);
// 加上id,class後，attrObj變成:
// { "key": "value", "style": "color:red", "id": "myId", "class": "myClass" }

const attributeName ="id";


</script>
<template>

    <!-- <h1 id="myId">我是標題</h1> -->
    <h1 v-bind:id="dynamicId">我是標題</h1>
    <a v-bind:href="url" :target="target1">Google</a>
    <a v-bind:href="url" target="_blank">Google</a>

    <button :disabled="isDisabled">按鈕</button>
    <button :disabled="!isDisabled">按鈕</button>

    <!-- 兩種寫法 -->
    <h2 v-bind="attrObj">標題2</h2>
    <h2 :="attrObj">標題2</h2>

    <h3 v-bind:[attributeName]="dynamicId"]>標題3</h3>
    <!--屬性名稱也能動態，等於<h3 id="myId1"> -->
    

</template>
<style scoped>
    
</style>