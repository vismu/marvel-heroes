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
          href: './favorite_heroes',
          text: 'Favorite Heroes',
        },
      ],
    };
  },
};
</script>

<style>
html, body {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
}

*, *:before, *:after {
  box-sizing: border-box;
}
#app {
  height: 100%;
  min-width: 600px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  width: 100%;
  height: 100px;
  padding: 20px 28px;
  text-align: left;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);
}

.content {
  height: calc(100% - 100px);
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
  outline: none;
}

a:hover {
  color: #f0141e;
}
</style>
