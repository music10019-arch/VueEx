<script setup>

import { ref, computed } from 'vue';
import studentData from '../../data/student.json'
const student = ref(studentData[5]);

const total = () => {
    console.log("fn被執行")
    return student.value.chinese
        + student.value.english
        + student.value.math
}

const totalScore = computed(() => {
    console.log("computed被執行")
    return student.value.chinese
        + student.value.english
        + student.value.math
})

const t = ref(0)

</script>
<template>
    <ul>
        <li>姓名 {{ student.name }}</li>
        <li>國文 {{ student.chinese }}</li>
        <li>英文 {{ student.english }}</li>
        <li>數學 {{ student.math }}</li>
        <li>總分 {{ total() }}</li>
        <li>總分 {{ totalScore }}</li>
    </ul>
    <input type="number" v-model="t">
    <!-- 依賴項沒變computed()不會執行，但一般函式會-->
    <input type="number" v-model="student.english">
    <!-- 依賴項變了computed()才會執行 -->

</template>
<style scoped></style>