import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../views/MovieDetail.vue'
import Explore from '../views/Explore.vue'
import Favorites from '../views/Favorites.vue'
import Search from '../views/Search.vue'
import Settings from '../views/Settings.vue'
import Personality from '../views/Personality.vue'
import AdvancedSearch from '../views/AdvancedSearch.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'Movie Detail',
    component: MovieDetail
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/personality',
    name: 'Personalty',
    component: Personality
  },
  {
    path: '/advanced-search',
    name: 'AdvancedSearch',
    component: AdvancedSearch
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
