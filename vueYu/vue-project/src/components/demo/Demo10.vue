<script setup>
import { ref, watch } from 'vue';
import memberData from '../../data/member.json';

const member = ref(memberData[0]);

// 監聽物件屬性(深層監聽)2種寫法
watch(member, (newValue, oldValue) => {
    console.log(newValue, oldValue);
}, { deep: true })

watch(() => member.value.age, (newValue, oldValue) => {
    console.log(newValue, oldValue);
})


function addAge() {
    member.value.age = member.value.age + 1;
}
function changeMember() {
    const index = Math.floor(Math.random() * memberData.length);
    member.value = memberData[index];
    
}
// ========================
import { watchEffect } from 'vue';

const name = ref('Derek');
const age = ref(0);

watchEffect(() => {
    console.log('name改變了', name.value);
    console.log('age改變了', age.value);
})

</script>
<template>
    <h1>{{ member.name }}</h1>
    <h2>{{ member.age }}</h2>
    <button @click="addAge()">年齡加1</button>
    <button @click="changeMember()">換會員</button>
    <input type="text" v-model="name">
    <input type="number" v-model="age">

</template>
<style scoped></style>