<template>
  <div class="heroes" v-on:scroll="handleScroll">
    <img v-if="isLoading" class="heroes__loader" src="../assets/loader.gif" />
    <hero v-for="hero in heroes" :hero="hero" :key="hero.id" />
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
    handleScroll({ target: { scrollHeight, clientHeight, scrollTop } }) {
      if ((scrollHeight - clientHeight) / 1.5 < scrollTop && !this.isLoading) {
        this.loadHeroes();
      }
      store.setAllHeroesScrollTop(scrollTop);
    },
  },
  mounted() {
    if (!this.heroes.length) {
      this.loadHeroes();
    }

    this.$el.scrollTop = store.state.allHeroesScrollTop;
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
    position: absolute;
    left: 0;
    right: 0;
    margin: 100px auto;
    z-index: 1;
    pointer-events: none;
  }
</style>

