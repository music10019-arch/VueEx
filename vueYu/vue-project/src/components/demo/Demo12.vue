<script setup>

import { ref } from 'vue';
import foodData from '../../data/food.json';

const foodItems = ref(foodData);

const selectedItem = ref(-1);

for (const item in foodItems.value[3]){
    console.log(item); // 只會抓到該資料的key
}

</script>

<template>

    <select v-model="selectedItem">
        <option disabled value="-1">請選擇</option>

        <option v-for="(value, index) in foodItems" :value="value.id">
            {{ `${index + 1}_${value.name}` }}
        </option>

    </select>
    選擇的ID:{{ selectedItem }}
    <p v-for="(value, index) in foodItems[3]"> 
        <!-- 陣列中索引(從0開始)為3，也就是id為4的資料 -->
        {{ value }} {{ index }}
    </p>

</template>

<style scoped></style>