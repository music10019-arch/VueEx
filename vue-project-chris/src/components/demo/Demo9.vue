<script setup>
import {ref, computed} from 'vue';  
import studentData from '../../data/student.json';
const student = ref(studentData[1]);

const totalScore = computed(() => {
    return student.value.chinese + student.value.english + student.value.math;
})
const t = ref(0)    ;

</script>

<template>
    <ul>
        <li>姓名{{student.name}}</li>
        <li>國文{{student.chinese}}</li>
        <li>英文{{student.english}}</li>
        <li>數學{{student.math}}</li>
        <li>總分{{totalScore}}</li>
    </ul>


</template>

<style scoped>


</style>
