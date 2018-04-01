<template>
  <div id="app">
    <div class="header">
      <router-link :to="logoLink">
        <img class="logo" src="./assets/logo.png">
      </router-link>
      <ul>
        <li v-for="link in links" :key="link.id">
          <router-link :to="link.href">
            {{ link.text }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      logoLink: './',
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

<style>
html,
body {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
}
#app {
  height: 100%;
  min-width: 540px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  width: 100%;
  height: 60px;
  padding: 20px 28px;
  text-align: left;
}

.content {
  height: calc(100% - 60px);
}

.logo {
  height: 100%;
}

ul {
  display: inline-block;
  vertical-align: top;
  list-style-type: none;
  padding: 16px;
  margin: 0px;
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
