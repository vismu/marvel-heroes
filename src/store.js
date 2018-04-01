import loadHeroes from '@/requests/loadHeroes';

export default {
  state: {
    heroes: [],
  },
  loadHeroes() {
    return loadHeroes().then((heroes) => {
      this.addHeroes(heroes);
    });
  },
  addHeroes(heroes) {
    this.state.heroes = this.state.heroes.concat(heroes);
  },
};
