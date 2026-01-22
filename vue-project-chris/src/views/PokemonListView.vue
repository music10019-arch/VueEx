<script setup>
import { ref, computed } from "vue";
import pokemonData from "../data/pokemon.json";
import PokemonCard from "../components/PokemonCard.vue";
const pokemonList = ref(pokemonData);

const searchText = ref();

const searchPokemon = computed(() => {
  if (!searchText.value) return pokemonList.value;
  return pokemonList.value.filter((p) =>
    p.name.toLowerCase().includes(searchText.value.toLowerCase()),
  );
});
</script>

<template>
  <input v-model="searchText" placeholder="搜尋神奇寶貝名字" />
  <!-- {{ pokemon.name }} -->
  <div class="myDiv">
    <div v-for="(value, index) in searchPokemon" :key="value.number">
      <PokemonCard>
        <img :src="value.image" />
        <!-- ------------------v-slot: 可以寫成 # ------------->

        <template #pokemonname>{{ value.name }}</template>
        <template v-slot:pokemonnumber>{{ value.number }}</template>
        <template v-slot:pokemontype>{{ value.types }}</template>
        <!-- /// -->
      </PokemonCard>
      <!-- <p>-------- 神奇寶貝列表 下一隻是 : ???? --------------</p> -->
    </div>
  </div>
</template>

<style scoped>
.myDiv {
  display: flex;
  flex-wrap: wrap;
}
</style>

<!-- 
   <template v-shot:leftpok></template>
    <template v-slot:rightpok></template> -->
