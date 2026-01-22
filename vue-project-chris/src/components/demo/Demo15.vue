<script setup>
import SlotButton from "../SlotButton.vue";
import PokemonCard from "../PokemonCard.vue";
import PokemonData from "../../data/pokemon.json";

const pokemon = PokemonData;

console.log(pokemon);
</script>

<template>
  <SlotButton>
    <template v-slot:leftIcon></template>
    <template v-slot:rightIcon></template>
    切換
  </SlotButton>

  <hr />
  {{ pokemon.name }}
  <PokemonCard v-for="p in PokemonData" :key="p.number">
    <template v-slot:pokemonimage>
      <img :src="p.image" />
    </template>
    <!-- v-slot: 可以寫成 # -->
    <template #pokemonname> {{}} {{ p.name }} </template>

    <template v-slot:pokemontype>
      {{ p.types }}
    </template>

    <template v-slot:pokemonnumber>
      {{ p.number }}
    </template>
  </PokemonCard>
</template>

<style scoped></style>

<!-- 
   <template v-shot:leftpok></template>
    <template v-slot:rightpok></template> -->
