<template>
  <div class="heroes">
    <hero v-for="hero in heroes" v-bind:hero="hero" :key="hero.id" />
  </div>
</template>

<script>
import Vue from 'vue';
import Hero from '@/components/Hero';
import store from '@/store';

Vue.component('hero', Hero);

export default {
  name: 'FavouriteHeroes',
  data() {
    return {
      heroes: store.state.heroes.filter(({ isFavourite }) => isFavourite),
    };
  },
};
</script>
