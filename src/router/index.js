import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import AllHeroes from '@/components/AllHeroes';
import FavoriteHeroes from '@/components/FavoriteHeroes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/all_heroes',
      name: 'AllHeroes',
      component: AllHeroes,
    },
    {
      path: '/favorite_heroes',
      name: 'FavoriteHeroes',
      component: FavoriteHeroes,
    },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
  ],
});
