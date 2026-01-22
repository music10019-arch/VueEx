<script setup>
import { ref } from "vue";
import ProjButton from "../ProjButton.vue";

const props = defineProps({ modelvalue: String });
const emit = defineEmits({ "update:modelValue": String });
</script>

<template>
  <p v-pre>{{ msg }}</p>

  <input
    :value="props.modelvalue"
    @input="(event) => emit('update:modelValue', event.target.value)"
  />
  <hr />
  <!-- / -->
  <ProjButton type="search">Button</ProjButton>
  <ProjButton type="add">Button</ProjButton>
  <ProjButton type="">Button</ProjButton>
</template>

<style scoped></style>
