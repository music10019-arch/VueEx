<script setup>

    import { ref } from 'vue'; // 內建函式
    
    const count = ref(1);

    function addCount() {
        count.value++;
    }

    //===================================
    import { reactive } from 'vue';

    const style = reactive({"color": "red"});

    function changeColor() {
        const color = ["red", "blue", "green", "yellow"];
        const randomIndex = Math.floor(Math.random() * color.length); // 四個顏色所以是0~3
        style.color = color[randomIndex];
    }


</script>
<template>

    <button v-on:click = "addCount()">{{ count }}</button>

    <!-- =================================== -->
    <!-- <button v-bind:style = "style">{{ style.color }}</button> -->

    <button @click = "changeColor()" v-bind:style = "style">{{ style.color }}</button>



</template>
<style scoped>

</style>