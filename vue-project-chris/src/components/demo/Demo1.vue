<script setup>

const msg = "設為本文插值";
// 要是表達式(要有確定值)
const i = 1;
const getNumber = () => {
  return (i+3)**3;
}
</script>

<template>

<p >{{ msg }}</p>
<p >{{ i + 199 }}</p>
<p >{{ getNumber() }}</p>
<p>{{ i>0?"i 是正數":"i  是負數" }}</p>

</template>

<style scoped>


</style>
