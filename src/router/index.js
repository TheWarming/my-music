import { createRouter, createWebHistory } from 'vue-router'

const Recommend = () => import('views/recommend/Recommend');
const Hot = () => import('views/hot/Hot');
const Search = () => import('views/search/Search');
const Play = () => import('views/play/Play');

const routes = [
  {
    path:'',
    redirect:'/recommend'
  },
  {
    path:'/recommend',
    component:Recommend
  },
  {
    path:'/hot',
    component:Hot
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/Play',
    component:Play
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
