<script setup>

const headList = ['名字', '國文', '英文', '數學']; // 表格標題

import studentData from '../data/student.json'
import { computed, ref } from 'vue'

const studentList = ref(studentData); // 學生清單(陣列)

const searchText = ref(); // 搜尋文字

// 篩選舊寫法
function searchByName() {
    if (searchText.value) {
        // 篩選
        studentList.value = studentData.filter(e => e.name.includes(searchText.value))
    } else {
        // 取得原始資料
        studentList.value = studentData;
    }
}

// Vue的篩選寫法
const students = computed(() => {
    if (searchText.value) {
        return studentData.filter(e => e.name.includes(searchText.value))
    } else{
        return studentData;
    }
})

</script>

<template>
    <!-- 
    走訪物件屬性： v-for="(value, key) in object :key="value.id" 可以用來拆解一個物件內所有的鍵值對
    key最好放物件id，其次物件本身value。

    包含索引值（Index）： v-for="(item, index) in list" 如果你需要顯示序號（如：1. 2. 3.），就可以用到 index。
    -->
    <h1>學生成績單</h1>
    <hr />
    <h3>
        名字搜尋：<input type="text" v-model="searchText" @keyup="searchByName" />
        <!-- 名字搜尋：<input type="text" v-model="searchText" /> -->
    </h3>
    <table class="table">
        <thead>
            <tr>
                <th colspan="4">學生成績單</th>
            </tr>
            <tr>
                <th v-for="head in headList" :key="head">{{ head }}</th>
                <!-- 這裡沒用index也可以，只要標題不重複，可以寫:key="head" -->
                <!-- key最推薦使用物件本身id，其次是物件自身value(適用於內容不會重複且不會變動)，最後才是index -->
            </tr>
        </thead>
        <tbody>
            <tr v-for="value in studentList" :key="value.id">
                <td>{{ value.name }}</td>
                <td>{{ value.chinese }}</td>
                <td>{{ value.english }}</td>
                <td>{{ value.math }}</td>
            </tr>
        </tbody>
    </table>

</template>


<style scoped></style>