<script setup>
import { ref } from 'vue';
import footData from '../../data/food.json';

const foodItems = ref(footData)


</script>

<template>

    <select>
        <option>1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
    </select>


</template>

<style scoped></style>
