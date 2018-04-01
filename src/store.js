import loadHeroes from '@/requests/loadHeroes';

export default {
  state: {
    heroes: [],
    allHeroesScrollTop: 0,
    favoriteHeroesScrollTop: 0,
  },
  loadHeroes() {
    return loadHeroes().then((heroes) => {
      this.addHeroes(heroes);
    });
  },
  addHeroes(heroes) {
    this.state.heroes = this.state.heroes.concat(heroes);
  },
  setAllHeroesScrollTop(allHeroesScrollTop) {
    this.state.allHeroesScrollTop = allHeroesScrollTop;
  },
  setFavoriteHeroesScrollTop(favoriteHeroesScrollTop) {
    this.state.favoriteHeroesScrollTop = favoriteHeroesScrollTop;
  },
};
