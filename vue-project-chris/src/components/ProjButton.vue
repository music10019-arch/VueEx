<script setup>
import { computed, ref } from "vue";
class Display {
  constructor(text1, classname1, icon1) {
    this.text = text1;
    this.classname = classname1;
    this.icon = icon1;
  }
}
const props = defineProps({ type: String });
const display = computed(() => {
  switch (props.type) {
    case "search":
      // {text:"搜尋",classname:"btn btn-primary" };
      return new Display("搜尋", "btn btn-primary", "bi-search");
    case "add":
      return new Display("增加", "btn btn-success", "bi-plus");
    default:
      return new Display("未設定", null, null);
  }
});

// 新增功能：可以同時渲染多個按鈕
const types = ["search", "add", "delete"];
const displays = computed(() =>
  types.map((t) => {
    switch (t) {
      case "search":
        return new Display("搜尋", "btn btn-primary", "bi-search");
      case "add":
        return new Display("增加", "btn btn-success", "bi-plus");
      case "delete":
        return new Display("刪除", "btn btn-danger", "bi-trash");
      default:
        return new Display("未設定", "btn btn-secondary", "bi-question");
    }
  }),
);
</script>

<template>
  <!-- 原本你的單一按鈕 -->

  <button :class="display.classname">
    <i class="bi-apple"> </i>{{ display.text }}
  </button>

  <!-- 新增多按鈕功能 -->
  <div style="margin-top: 1rem">
    <button
      v-for="(d, index) in displays"
      :key="index"
      :class="d.classname"
      style="margin-right: 0.5rem"
    >
      <i :class="d.icon"></i> {{ d.text }}
    </button>
  </div>
</template>

<style scoped></style>
