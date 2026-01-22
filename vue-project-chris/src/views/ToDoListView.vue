<script setup>
// const todoList = ref([
//   {
//     id: 199,
//     text: "攀岩",
//     done: false,
//   },
//   {
//     id: 200,
//     text: "滑水",
//     done: true,
//   },
// ]);
import { ref, computed } from "vue";

const todoList = ref([]);

const inputText = ref();

const addTodo = () => {
  todoList.value.push({
    id: Date.now(), // 產生唯一 id 因為是到毫秒數 不會重複
    text: inputText.value,
    done: false,
  });
};

const removeTodo = (id) => {
  todoList.value = todoList.value.filter((x) => x.id != id);
  // 把不要的東西排除掉，就是刪掉
};

const doneComp = computed(() => {
  return todoList.value.filter((x) => x.done).length;
});
</script>

<template>
  <h1>待辦清單</h1>
  <hr />
  <div style="display: flex">
    <input
      type="text"
      placeholder="輸入新的待辦事項"
      v-model="inputText"
      @keyup.enter="addTodo"
    />
    <button @click="addTodo">新增</button>
  </div>

  <table>
    <tbody>
      <TransitionGroup>
        <tr v-for="(value, index) in todoList">
          <td>
            <input type="checkbox" v-model="value.done" />
          </td>
          <td>
            <span :class="value.done ? 'done' : null">
              {{ value.text }}
            </span>
          </td>
          <td>
            <button @click="removeTodo(value.id)">刪除</button>
          </td>
        </tr>
      </TransitionGroup>
    </tbody>
  </table>
  <br />
  <button @click="todoList = []">全刪除 ( 透過直接指定為空[ ] )</button>
  <hr />
  <p>共 {{ todoList.length }} 項，已完成 {{ doneComp }} 項</p>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: rgb(23, 217, 87);
}

.v-enter-from,
.v-leave-to {
  opacity: 0.3;
  color: red;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  color: rgb(224, 9, 199);
}

/* 過渡狀態 */
.v-enter-active,
.v-leave-active {
  transition:
    opacity 5s ease,
    color 6s linear;
}
</style>
