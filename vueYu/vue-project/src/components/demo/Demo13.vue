<script setup>
const divClick=() =>alert('Div被點擊')
const btnClick=() =>alert('按鈕被點擊')


</script>

<template>

<div @click="divClick" style="background-color: darkgreen;">
    <button @click.stop="btnClick">點我</button> 
    <!-- .stop阻止冒泡，不會觸發divClick -->
</div>


</template>

<style scoped></style>