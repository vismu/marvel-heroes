<template>
    <div class="heroes">
        <img v-if="isLoading" class="heroes__loader" src="../assets/loader.gif" />
        <div v-else class="hero" v-for="hero in heroes" :key="hero.id">
            <img class="hero__img" v-bind:src="hero.img" />
            {{ hero.name }}
        </div>
    </div>
</template>


<script>
import store from '@/store';

export default {
  name: 'AllHeroes',
  data() {
    return {
      isLoading: false,
      heroes: store.state.heroes,
    };
  },

  mounted() {
    this.isLoading = true;
    store.loadHeroes().then(() => {
        this.isLoading = false;
        this.heroes = store.state.heroes;
    });
  },
};
</script>

<style scoped>
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
    }
</style>

