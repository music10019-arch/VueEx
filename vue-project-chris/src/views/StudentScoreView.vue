<script setup>
import { ref } from 'vue'
import studentData from '../data/student.json'

// 欄位表頭
const headList = ['名字', '國文', '英文', '數學']

// JSON 資料
const students = ref(studentData)
const originalStudents = ref(studentData) // 保留原始資料

// 欄位對應
const fieldMap = {
    名字: 'name',
    國文: 'chinese',
    英文: 'english',
    數學: 'math'
}

const searchText = ref('')


function searchByName() {
    if (searchText.value) {
        students.value = originalStudents.value.filter(
            s => s.name.includes(searchText.value)
        )
    } else {
        students.value = originalStudents.value
    }
}
</script>

<template>
    <h1>學生成績單</h1>
    <hr />
    <h3>
        名字搜尋：
        <input type="text" v-model="searchText" @input="searchByName" />
    </h3>

    <table class="table" cellpadding="10">
        <thead>
            <tr>
                <th colspan="10">學生成績單</th>
            </tr>
            <tr>
                <th v-for="(head, idx) in headList" :key="idx">{{ head }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in students" :key="student.id">
                <td v-for="(head, idx) in headList" :key="idx">
                    {{ student[fieldMap[head]] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>
