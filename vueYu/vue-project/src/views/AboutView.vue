<script setup></script>

<template>

    <h1>About</h1>

    <RouterLink :to="{ name: 'Content1', params: { id: 'TEST666' } }">Content1</RouterLink> |
    <RouterLink :to="{ name: 'Content2' }">Content2</RouterLink>

    <RouterView></RouterView> <!-- 用來搭配子層(children) -->
    <!-- 這段會作為提供子層被呼叫時抽換的view(上面是about的view，下面是子層的view) -->

</template>

<style scoped></style>