<template>
  <div class="hero">
    <img class="hero__img" v-bind:src="hero.img" />
    <div class="hero__info">
      <h1>{{ hero.name }}</h1>
      <h2>{{ hero.description }}</h2>
    </div>
    <button
      class="hero__favorite"
      v-on:click="hero.isFavorite ? removeHeroFromFavorites() : addHeroToFavorites()"
    >
      <StarIcon
        v-if="hero.isFavorite"
        fillColor="#FFEB7F"
      />
      <StarOutlineIcon
        v-else
        fillColor="#000"
      />
    </button>
  </div>
</template>

<script>
import StarOutlineIcon from 'vue-material-design-icons/star-outline';
import StarIcon from 'vue-material-design-icons/star';

export default {
  name: 'Hero',
  components: {
    StarOutlineIcon,
    StarIcon,
  },
  props: {
    hero: {
      type: Object,
    },
  },
  methods: {
    addHeroToFavorites() {
      this.hero.isFavorite = true;
      this.$emit('update-favorites');
    },
    removeHeroFromFavorites() {
      this.hero.isFavorite = false;
      this.$emit('update-favorites');
    },
  },
};
</script>

<style>
  .hero {
    position: relative;
    display: flex;
    width: 100%;
    min-height: 220px;
  }

  .hero + .hero {
    padding-top: 20px;
  }

  .hero__img {
    width: 30%;
    height: 100%;
  }

  .hero__info {
    flex-grow: 1;
    padding-left: 28px;
  }

  .hero__info h1 {
    margin-top: 0px;
  }

  .hero__favorite {
    position: absolute;
    right: 0px;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: #fff;
  }

  .hero__favorite svg {
    width: 40px;
    height: 40px;
  }
</style>
