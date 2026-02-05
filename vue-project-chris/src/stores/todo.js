import { defineStore } from "pinia";
import { ref, computed } from "vue";


export const useToDoStore =
    defineStore("todo", () => {

        const toDoList = ref([])

        // 這裡是讓回傳值有東西 inputtext
        function addToDo(inputtext) {

            toDoList.value.push({
                id: Date.now(),
                // 產生唯一 id 因為是到毫秒數 不會重複
                text: inputText,
                done: false,
            });
        };


        return { toDoList, addToDo };
    })

//把新增的方法都放到 todo.js 不寫在 component 裡面 