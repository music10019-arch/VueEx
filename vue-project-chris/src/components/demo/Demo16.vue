<script setup>
import { ref } from "vue";
import Demo17 from "@/components/demo/Demo17.vue";

const msg = ref("Hi!!!!!!");
const isShow1 = ref(true);
const isShow2 = ref(false);
</script>

<template>
  <p v-pre>{{ msg }}</p>

  <button @click="isShow1 = !isShow1">Click1改成反向</button>

  <button @click="isShow2 = !isShow2">Click1改成反向</button>
  <p>{{ isShow1 }}</p>
  <p>{{ isShow2 }}</p>

  <Demo17 v-model="inputText"></Demo17>
  {{ inputText }}
</template>

<style scoped></style>
