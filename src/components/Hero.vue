<template>
  <div class="hero">
    <img class="hero__img" v-bind:src="hero.img" />
    <div class="hero__info">
      <h1>{{ hero.name }}</h1>
      <h2>{{ hero.description }}</h2>
    </div>
    <button
      class="hero__favourite"
      v-on:click="hero.isFavourite ? removeHeroFromFavourites() : addHeroToFavourites()"
    >
      <star-icon
        v-if="hero.isFavourite"
        fillColor="#FFEB7F"
      />
      <star-outline-icon
        v-else
        fillColor="#000"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      hero: this.$attrs.hero,
    };
  },
  methods: {
    addHeroToFavourites() {
      this.hero.isFavourite = true;
    },
    removeHeroFromFavourites() {
      this.hero.isFavourite = false;
    },
  },
};
</script>

<style>
  .hero {
    position: relative;
    display: flex;
    width: 100%;
  }

  .hero + .hero {
    padding-top: 20px;
  }

  .hero__img {
    width: 30%;
    height: 100%;
    z-index: -1;
  }

  .hero__info {
    flex-grow: 1;
    padding-left: 28px;
  }

  .hero__info h1 {
    margin-top: 0px;
  }

  .hero__favourite {
    position: absolute;
    right: 0px;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: #fff;
  }

  .hero__favourite svg {
    width: 40px;
    height: 40px;
  }
</style>
