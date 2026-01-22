<script setup>
import {ref,reactive} from 'vue' ;  
import { AbilityPoint } from '../../common/ability-point';
//@ 是 專案別名（通常對應 src/）
Math.random(); 
console.log(AbilityPoint.generateRandom());
const apRef = ref(AbilityPoint.generateRandom());

</script>



<template>
<h2>{{apRef}}</h2>
<ul>
    <li>力量: {{apRef.str}}</li>
    <li>敏捷: {{apRef.dex}}</li>
    <li>智力: {{apRef.int}}</li>
    <li>幸運: {{apRef.luk}}</li>
</ul>


<button @click="apRef=AbilityPoint.generateRandom()">重新生成能力值</button>

<!-- 按下去 → 執行 generateRandom() → 把結果存進 apRef    要存到 ref 才會更新render -->

<!--@click="AbilityPoint.generateRandom()" → 
函式確實執行了，產生新的物件，但 沒有把結果存進響應式變數，Vue 沒有監控到 apRef 變化，模板不會刷新。-->




</template>

<style scoped>


</style>
