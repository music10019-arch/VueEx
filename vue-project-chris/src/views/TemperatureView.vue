<script setup>
import { ref, watch } from 'vue'

const F = ref(100);
const C = ref();
const displayColor = ref('black');

watch(F, val => {
    C.value = ((val - 32) * 5 / 9).toFixed(2)
})

watch(C, val => {
    F.value = (val * 9 / 5 + 32).toFixed(2)
})



watch(C, val => {
    if (val >= 30)
        displayColor.value = 'red'
    else if (val >= 10 && val < 20)
        displayColor.value = 'green'
    else if (val < 10)
        displayColor.value = 'blue'
    else displayColor.value = 'black'
}, { immediate: true })

</script>
<template>
    <h1>溫度轉換</h1>

    <div>
        <label>華式溫度：</label>
        {{ F }}
        <input v-model.number="F" type="range" />

    </div>
    <p> </p>
    <div>
        <label :style="{ 'color': displayColor }">攝氏溫度：</label>
        <input v-model.number="C" :style="{ 'color': displayColor }" />
    </div>
</template>

<style scoped></style>