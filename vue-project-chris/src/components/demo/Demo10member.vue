<script setup>
import {ref, watch} from 'vue';  
import memberData from '../../data/member.json';
const member = ref(memberData[1]);

// const totalScore = computed(() => {
//     return student.value.chinese + student.value.english + student.value.math;
// })
// const t = ref(0)    ;

</script>

<template>
<h1>{{ member.name }}</h1>
<h1>{{ member.age }}</h1>
<!-- 年齡加一 -->
</template>

<style scoped>


</style>
