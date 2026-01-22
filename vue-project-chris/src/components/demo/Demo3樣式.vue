<script setup>

// 還可以有dynamic id 特定時候才binding 屬性
const dynamicId = "myid1";

</script>

<template>
<h1 :id = "dynamicId">測試綁定屬性</h1>

<a href="https://www.google.com.tw" 
target="_blank" >點我跳到網頁</a>

<button disabled="true" id = "myid2">不可點的按鈕</button>

</template>



<style scoped>

#myid1 {
  
    background-color: rgb(213, 37, 149);
}

#myid2 {
    background-color: rgb(19, 51, 194);

}



</style>
