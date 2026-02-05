<script setup>
    import { nextTick, ref } from 'vue';

    const count = ref(0);

    function click() {
    // 數據更新後，DOM 尚未同步更新，此時抓取到的仍是舊的內容(非同步更新，會少1)
        count.value++;
        const myP = document.querySelector("#p").textContent;
        console.log(myP);

    // 使用 Vue 內建方法，確保在 DOM 渲染完成後才執行回呼函式
        nextTick(() => {
            const myP = document.querySelector("#p").textContent;
            console.log(myP);
        });
    }

</script>
<template>

    <p id="p">{{ count }}</p>
    <button @click="click">按鈕</button>

</template>
<style scoped>
    
</style>