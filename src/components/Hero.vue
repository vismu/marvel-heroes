<template>
  <div class="hero">
    <img class="hero__img" v-bind:src="hero.img" />
    <div class="hero__info">
        <h1>{{ hero.name }}</h1>
        <h2>{{ hero.description }}</h2>
    </div>
    <star-icon v-if="hero.isFavourite" class="hero__favourite" fillColor="#FFEB7F" />
    <star-outline-icon v-else class="hero__favourite" fillColor="#000" />
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data(test) {
      return {
          hero: this.$attrs.hero,
      };
  },
}
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
    }

    .hero__favourite svg {
        width: 40px;
        height: 40px;
    }
</style>


