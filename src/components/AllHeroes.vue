<template>
  <div class="heroes">
    <img v-if="isLoading" class="heroes__loader" src="../assets/loader.gif" />
    <hero v-else v-for="hero in heroes" v-bind:hero="hero" :key="hero.id" />
  </div>
</template>

<script>
import Vue from 'vue';
import Hero from '@/components/Hero';
import store from '@/store';

Vue.component('hero', Hero);

export default {
  name: 'AllHeroes',
  data() {
    return {
      isLoading: false,
      heroes: store.state.heroes,
    };
  },

  methods: {
    loadHeroes() {
      this.isLoading = true;
      store.loadHeroes().then(() => {
        this.isLoading = false;
        this.heroes = store.state.heroes;
      });
    },
  },

  mounted() {
    if (!this.heroes.length) {
      this.loadHeroes();
    }
  },
};
</script>

<style>
  .heroes {
    width: 100%;
    height: 100%;
    padding: 20px 28px;
    overflow: auto;
  }

  .heroes__loader {
    margin: 100px auto;
    height: 50%;
  }
</style>

