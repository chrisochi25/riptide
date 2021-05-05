import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../views/MovieDetail.vue'
// import Explore from '../views/Explore.vue'
import Favorites from '../views/Favorites.vue'
import Search from '../views/Search.vue'
import Settings from '../views/Settings.vue'
import Personality from '../views/Personality.vue'
import AdvancedSearch from '../views/AdvancedSearch.vue'
import Login from '../views/Login.vue'
import Comedy from '../views/Comedy.vue'
import Thriller from '../views/Thriller.vue'
import Drama from '../views/Drama.vue'
import Documentary from '../views/Documentary.vue'

// import { routeGuard } from '@/auth'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
    // beforeEnter: routeGuard
  },
  {
    path: '/movie/:id',
    name: 'Movie Detail',
    component: MovieDetail
    // beforeEnter: routeGuard
  },
  // {
  //   path: '/explore',
  //   name: 'Explore',
  //   component: Explore
  //   // beforeEnter: routeGuard
  // },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
    // beforeEnter: routeGuard
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
    // beforeEnter: routeGuard
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
    // beforeEnter: routeGuard
  },
  {
    path: '/personality',
    name: 'Personalty',
    component: Personality
    // beforeEnter: routeGuard
  },
  {
    path: '/advanced-search',
    name: 'AdvancedSearch',
    component: AdvancedSearch
    // beforeEnter: routeGuard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    // beforeEnter: routeGuard
  },
  {
    path: '/explore/comedy',
    name: 'Comedy',
    component: Comedy
    // beforeEnter: routeGuard
  },
  {
    path: '/explore/thriller',
    name: 'Thriller',
    component: Thriller
    // beforeEnter: routeGuard
  },
  {
    path: '/explore/drama',
    name: 'Drama',
    component: Drama
    // beforeEnter: routeGuard
  },
  {
    path: '/explore/documentary',
    name: 'Documentary',
    component: Documentary
    // beforeEnter: routeGuard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
