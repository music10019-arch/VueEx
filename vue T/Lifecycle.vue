<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

const count = ref(1);

console.log('Composition API');

onBeforeMount(() => {
    console.log('組件掛載前BeforeMount');
})
onMounted(() => {
    console.log('組件掛載後Mounted');
})

onBeforeUpdate(() => {
    console.log('組件更新前BeforeUpdate');
})
onUpdated(() => {
    console.log('組件更新後Update');
})

onBeforeUnmount(() => {
    console.log('組件銷毀前BeforeUnmount');
})
onUnmounted(() => {
    console.log('組件銷毀後Unmounted');
})

</script>

<script>

export default {
    data() {
        console.log('Init Options API');
        return {}
    }
}

</script>

<template>
    <button @click="count++">{{ count }}</button>
</template>

<style scoped></style>
