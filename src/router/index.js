import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../views/Books.vue'
import AddBook from '../views/addBook.vue'
import Ebook from '../views/Ebook.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',  name: 'Home',  component: Home },
  { path : '/books/:id', name : 'Books' ,component : Books},
  { path : '/eBooks/:id', name : 'E-Books' ,component : Ebook},
  { path : '/addbook', name : 'Add-Book' ,component : AddBook},
  { path: '/about',  name: 'About',  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
