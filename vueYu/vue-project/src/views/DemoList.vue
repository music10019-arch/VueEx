<script setup>

import { ref } from 'vue';

import Demo1 from '../components/demo/Demo1.vue';
import Demo2 from '../components/demo/Demo2.vue';
import Demo3 from '../components/demo/Demo3.vue';
import Demo4 from '../components/demo/Demo4.vue';
import Demo5 from '../components/demo/Demo5.vue';
import Demo6 from '../components/demo/Demo6.vue';
import Lifecycle from './Lifecycle.vue';
import Demo14 from '@/components/demo/Demo14.vue';

const id = ref(0);


const componentList = [Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Lifecycle, Demo14];

const selectedIndex = ref(0);

</script>

<template>
    <!-- <select v-model="selectedIndex">
        <option value="0">Demo1</option>
        <option value="1">Demo2</option>
        <option value="2">Demo3</option>
        <option value="3">Demo4</option>
    </select> -->
    <select v-model="selectedIndex">
        <option v-for="(value, index) in componentList" :value="index">
            {{ value.__name }}
        </option>
    </select>
    <hr />
    <!-- KeepAlive當你切到其他元件時，不會觸發掛載或卸載，元件的更新動作也會保留 -->
    <KeepAlive>
        <component :is="componentList[selectedIndex]"></component>
    </KeepAlive>

</template>

<style scoped></style>