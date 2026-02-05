<script setup>
    // 這種寫法不推薦，可能會被XSS攻擊
    const msg= `<h1>本文插值</h1>`;
    const msg1=`<img src="error.jpg" onerror="alert('XSS攻擊');document.body.append('攻擊內容');" />`

</script>
<template>
    <!-- <img src="error.jpg" onerror="alert('XSS攻擊');document.body.append('攻擊內容');" /> -->
    <p v-html="msg"></p>
    <p v-html="msg1"></p>

</template>
<style scoped>
    p {
        color: green;
    }
</style>