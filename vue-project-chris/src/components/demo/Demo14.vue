<script setup>
import { ref } from "vue";

const isShow = ref(true);

// 但這邊要在頁面間做切換 才有用
</script>

<template>
  <button @click="isShow = !isShow">Toggle(切換之意)</button>
  <Transition>
    <h1 v-show="isShow">Hello</h1>
  </Transition>
</template>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0.3;
  color: red;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  color: rgb(9, 224, 91);
}

/* 過渡狀態 */
.v-enter-active,
.v-leave-active {
  transition:
    opacity 5s ease,
    color 6s linear;
}

/* 這邊的ease是動畫的變化速度曲線 */
</style>
