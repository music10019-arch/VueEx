<script setup>
import { ref } from 'vue';

const weight = ref();
const height = ref();
const BMI = ref();
const isHidden = ref(true);

function calculateBMI() {
    const result = weight.value / ((height.value) / 100 * (height.value) / 100)
    BMI.value = result.toFixed(2);
    isHidden.value = false;
}
</script>

<template>
    <h1>BMI計算機</h1>
    <hr />
    <div>
        身高(公分cm)：<input type=number v-model="height" />
        體重(公斤kg)：<input type=number v-model="weight" />
        <br />
        <button @click="calculateBMI()">計算</button>
        <br />
        <span v-bind:hidden="isHidden">您的BMI：{{ BMI }}</span>
    </div>

</template>


<style scoped>
div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
}
</style>