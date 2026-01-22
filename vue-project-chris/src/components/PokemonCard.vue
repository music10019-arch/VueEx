<script setup></script>

<template>
  <div class="card">
    <div class="image">
      <!-- 圖片位置 -->

      <slot> </slot>
    </div>
    <ul class="info">
      <li>編號 <slot name="pokemonnumber"> </slot></li>
      <li>名字 <slot name="pokemonname"> </slot></li>
      <li>屬性 <slot name="pokemontype"> </slot></li>
    </ul>
  </div>
</template>

<style scoped>
.card {
  background-color: rgb(229, 246, 196);
  width: 200px;
  height: 200px;
  border-radius: 8px;
  margin: 10px;
  border: 1px solid;
}

.image {
  text-align: center;
}

.info {
  padding: 1px;
  list-style: none;
  font-size: 16px;
}
</style>
