<template>
    <div class="heroes">
        <div v-for="hero in heroes" :key="hero.id">
            {{ hero.name }}
        </div>
    </div>
</template>


<script>
export default {
  name: 'AllHeroes',
  data() {
    return {
      heroes: [],
    };
  },
};
</script>

<style scoped>
    .heroes {
        width: 100%;
        height: 100%;
    }
</style>

