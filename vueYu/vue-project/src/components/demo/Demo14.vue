<script setup>

import { ref } from 'vue';

const isShow = ref(true);


</script>

<template>

    <button @click="isShow = !isShow">切換</button>
    <Transition>
        <h1 v-show="isShow">Hello</h1>
    </Transition>

</template>

<style scoped>
/* 進入起始 */
.v-enter-form,
/* 離開終點 */
.v-leave-to {
    opacity: 0.2;
    color: white;
}

/* 進入終點 */
.v-enter-to,
/* 離開起始 */
.v-leave-form {
    opacity: 1;
    color: black;
}

/* 過度 */
.v-enter-active,
.v-leave-active {
    transition: opacity 5s linear, color 3s linear;
}
</style>