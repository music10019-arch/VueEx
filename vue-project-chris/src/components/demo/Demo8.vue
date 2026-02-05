<script setup>

    import { ref } from 'vue';

    const text = ref("Hello");

    function changeTextValue(event) {
        console.log('here')
        text.value = event.target.value;
    }


</script>
<template>
    <h1>{{ text }}</h1>

    <!-- 兩種寫法 -->
    <input :value="text" @input="changeTextValue($event)">
    <hr>
    <p>我們要這個</p>
    <input v-model="text">
    <p>我們要這個</p>

</template>
<style scoped>
    
</style>