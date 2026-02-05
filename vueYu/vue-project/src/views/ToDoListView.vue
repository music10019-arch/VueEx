<script setup>
import { computed, ref } from 'vue'

const todoList = ref([]); // todo清單(陣列)

const id = ref(1); // id累加器

const todo = ref({ // todo物件
    'id': id,
    'text': '',
    'done': false
})

// 新增todo
function addTodo() {
    todoList.value.push({
        'id': id.value++,
        'text': todo.value.text,
        'done': false
    })
    todo.value.text = ''; // 新增完後清空輸入框
}

// 刪除todo
function deleteTodo(id) {
    todoList.value = todoList.value.filter(e => e.id !== id);
    // 篩選id，不等於我要刪除的id直接通過，符合的(要刪除的id)會被排除陣列外
}

// 顯示已完成X個
const doneCount = computed(() => {
    return todoList.value.filter(e => e.done).length;
})

</script>

<template>

    <h1>待辦清單</h1>
    <hr />

    <div style="display: flex;">
        <input type="text" v-model="todo.text" placeholder="輸入新的待辦事項" />
        <button @click="addTodo()">新增</button>
    </div>

    <table>
        <tbody>
            <TransitionGroup>
                <tr v-for="todo in todoList" :key="todo.id">
                <td>
                    <input type="checkbox" v-model="todo.done" />
                </td>
                <td>
                    <span :class="{ 'done': todo.done }">{{ todo.text }}</span>
                    <!-- { '類別名稱': 布林值條件 } ，true時加上類別名稱(這裡是done)，false時不加 -->
                </td>
                <td>
                    <button @click="deleteTodo(todo.id)">刪除</button>
                </td>
            </tr>
            </TransitionGroup>
            
        </tbody>
    </table>
    <p>共 {{ todoList.length }} 項，已完成 {{ doneCount }} 項</p>

</template>

<style scoped>
.done {
    text-decoration: line-through;
    color: grey;
}

/* 進入起始 */
.v-enter-form,
/* 離開終點 */
.v-leave-to {
    opacity: 0.2;
    transform: translateX(30px);
    color: white;
}

/* 過度 */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
</style>