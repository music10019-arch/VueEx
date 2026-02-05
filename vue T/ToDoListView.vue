<script setup>

</script>

<template>

    <h1>待辦清單</h1>
    <hr />

    <div style="display: flex;">
        <input type="text" placeholder="輸入新的待辦事項" />
        <button>新增</button>
    </div>

    <table>
        <tbody>
            <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>
                    <span>羽球</span>
                </td>
                <td>
                    <button>刪除</button>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" checked="checked" />
                </td>
                <td>
                    <span class="done">健身</span>
                </td>
                <td>
                    <button>刪除</button>
                </td>
            </tr>
        </tbody>
    </table>
    <p>共 0 項，已完成 0 項</p>

</template>

<style scoped>
.done {
    text-decoration: line-through;
    color: grey;
}
</style>