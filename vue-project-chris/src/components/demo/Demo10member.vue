<script setup>
import { ref, watch } from 'vue';
import memberData from '../../data/member.json';
const member = ref(memberData[1]);

function ageAddOne() {
    member.value.age++;
}
function aggSquare() {
    member.value.age = member.value.age ** 2;
}

function chabgemember() {
    const index = Math.floor(Math.random() * memberData.length);
    member.value = memberData[index];
}
</script>

<template>
    <h1>{{ member.name }}</h1>
    <h1>{{ member.age }}</h1>

    <!-- 年齡加一 -->
    <button @click="ageAddOne">讓年齡加一</button>
    <button @click="aggSquare">讓年齡平方</button>
    <button @click="chabgemember">換人</button>

</template>

<style scoped></style>
