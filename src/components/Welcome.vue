<template>
  <div class="welcome">
    <h1>{{ title }}</h1>
    <h2>{{ description }}</h2>
    <h2>{{ appeal }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      title: 'Welcome to my Vue.js App',
      description: 'This App allows you to see at the all marvel heroes and choose your favorite ones',
      appeal: 'Let\'s try it!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.welcome {
  margin: 100px auto;
}
</style>
