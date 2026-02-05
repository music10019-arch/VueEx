<script setup>

const headList = ['名字', '國文', '英文', '數學'];

</script>

<template>
    <h1>學生成績單</h1>
    <hr />
    <h3>
        名字搜尋：<input type="text" />
    </h3>
    <table class="table">
        <thead>
            <tr>
                <th colspan="4">學生成績單</th>
            </tr>
            <tr>
                <th>{{ headList[0] }}</th>
                <th>{{ headList[1] }}</th>
                <th>{{ headList[2] }}</th>
                <th>{{ headList[3] }}</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

</template>


<style scoped></style>