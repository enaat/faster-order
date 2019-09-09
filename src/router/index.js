import Vue from 'vue'
import Router from 'vue-router'
import AllNotes from '../components/AllNotes'
import Favorites from '../components/Favorites'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', redirect: '/allNotes'},
    {path: '/allNotes', component: AllNotes},
    {path: '/favorites', component: Favorites}
  ],
  mode: 'history'
});
