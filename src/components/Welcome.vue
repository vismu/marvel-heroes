<template>
  <div class="welcome">
    <h1>{{ title }}</h1>
    <h2>{{ description }}</h2>
    <h2>{{ appeal }}</h2>
    <ul>
      <li v-for="link in links" :key="link.id">
        <router-link :to="link.href">
          {{ link.text }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      title: 'Welcome to my Vue.js App',
      description: 'This App allows you to see at the all marvel heroes and choose your favourite',
      appeal: 'Let\'s try it!',
      links: [
        {
          id: 0,
          href: './all_heroes',
          text: 'All Heroes',
        },
        {
          id: 1,
          href: './favourite_heroes',
          text: 'Favourite Heroes',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  font-size: 1.4em;
  font-weight: bold;
  color: #000;
  transition: color 0.3s;
}

a:hover {
  color: #f0141e;
}
</style>
