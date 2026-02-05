<script setup>


import {ref} from 'vue';

const score=ref(0);


const isLogin = ref(false);

const visible = ref(true);
</script>



<template>

    <input type="number" v-model="score">

    <p v-if="score >= 60">及格</p>  
    <p v-else-if="score >= 50" >可補考</p>
    <p v-else>不及格</p>



<button class="btn btn-danger" @click="isLogin = !isLogin">登入切換</button>

<div>
    <template v-if="isLogin">

        <h1>Hi</h1>
        <p>使用者您好!!</p>

    </template>

    <template v-else>
        <p>尚未登入</p>
    </template>

</div>

<button @click="visible = !visible">
{{ visible ? '隱藏' : '顯示'}}
</button>
<p v-show="visible">Hello!!!</p>

</template>

<style scoped></style>