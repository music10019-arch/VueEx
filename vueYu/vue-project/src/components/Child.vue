<script setup>

// const props = defineProps(["title ,"msg"]);
const props = defineProps({
    title: String,
    msg: { type: String, required: true },
    count: { type: Number, default: 10 }
});

const emit = defineEmits(["btnClicked"]);

function handleClick() {
    // console.log('here');
    emit("btnClicked", "Here!!!", {name: 'Sean'});
}

</script>

<template>

    <h3>我是子組件</h3>
    <button @click="handleClick()">子元件按鈕</button>

    {{ props.title }} <!-- 父組件傳來的(titleMsg) -->
    {{ props.msg }} <!-- 父組件傳來的(msg) -->
    {{ props.count }} <!-- 子組件預設值(10) -->


</template>

<style scoped></style>