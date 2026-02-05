<script setup>

import {ref,computed,watch, watchEffect} from 'vue';

const fTemperature = ref(100);

const fToc = () => {
 return (f.value-32) *5 / 9;

}


const cTemperature =computed(() =>{

    return ((fTemperature.value - 32) * 5 / 9).toFixed(2);
})

const displayColor = ref ('black');


watch(cTemperature,() => {

    if(cTemperature.value>=30){
        displayColor.value = 'red';
    
    }else if (cTemperature.value < 20){
        displayColor.value = 'blue';
    } else {
        displayColor.value = 'black';

    }
},{immediate:true})






</script>
<template>
    <h1>溫度轉換華氏轉攝氏</h1>
    <hr />
    <div>
        <label>華式溫度：</label>
        <input v-model="fTemperature" type="number"/>
    </div>
    <p :style="{'color':displayColor}">攝氏溫度：{{ cTemperature }}</p>
</template>

<style scoped></style>