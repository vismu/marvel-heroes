<template>
  <div class="heroes" v-on:scroll="handleScroll">
    <div v-if="!heroes.length" class="heroes__empty">
      <h2>You have not favorite heroes yet...</h2>
    </div>
    <Hero
      v-else
      v-on:update-favorites="onUpdateFavorites()"
      v-for="hero in heroes"
      :hero="hero"
      :key="hero.id"
    />
  </div>
</template>

<script>
import store from '@/store';
import Hero from '@/components/Hero';

export default {
  name: 'FavoriteHeroes',
  components: {
    Hero,
  },
  data() {
    return {
      heroes: store.state.heroes.filter(({ isFavorite }) => isFavorite),
    };
  },
  methods: {
    onUpdateFavorites() {
      this.heroes = store.state.heroes.filter(({ isFavorite }) => isFavorite);
    },
    handleScroll({ target: { scrollTop } }) {
      store.setFavoriteHeroesScrollTop(scrollTop);
    },
  },
  mounted() {
    this.$el.scrollTop = store.state.favoriteHeroesScrollTop;
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

  .heroes__empty {
    margin: 100px auto;
  }
</style>

