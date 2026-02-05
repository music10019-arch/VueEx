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
    <input v-model="text">

</template>
<style scoped>
    
</style>