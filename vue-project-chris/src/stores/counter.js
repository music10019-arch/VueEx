import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
    const count = ref(0);

    const doubleCount = computed(() => count.value * 2);

    function addCount() {
        count.value++;
    }

    const privateCount = ref(0);


    return { count, doubleCount, addCount };
});



// 
