<script setup>
    import {ref, reactive} from 'vue';

    import {AbilityPoint} from"../../common/ability-point";

    Math.random(); // 0~1

    const apRef = ref(AbilityPoint.generateRandom());
    function changeApRef() {
        apRef.value = AbilityPoint.generateRandom();
    }

    // ====================================================
    const apReactive = reactive(AbilityPoint.generateRandom());
    function changeApReactive() {
        const temp = AbilityPoint.generateRandom();
        apReactive.str = temp.str;
        apReactive.dex = temp.dex;
        apReactive.int = temp.int;
        apReactive.luk = temp.luk;
    }


</script>
<template>

    <div>
        <ul>
            <li>力量：{{ apRef.str }}</li>
            <li>敏捷：{{ apRef.dex }}</li>
            <li>智力：{{ apRef.int }}</li>
            <li>幸運：{{ apRef.luk }}</li>
        </ul>
        <button @click="changeApRef()">擲骰</button>
    </div>
    <br>
    <!-- ==================================================== -->
    <div>
        <ul>
            <li>力量：{{ apReactive.str }}</li>
            <li>敏捷：{{ apReactive.dex }}</li>
            <li>智力：{{ apReactive.int }}</li>
            <li>幸運：{{ apReactive.luk }}</li>
        </ul>
        <button @click="changeApReactive()">擲骰</button>
    </div>
</template>
<style scoped>
    
</style>