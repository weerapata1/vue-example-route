import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../views/Books.vue'
import AddBook from '../views/addBook.vue'
import EditBook from '../views/editEbook.vue'
import Ebook from '../views/Ebook.vue'
import NotFound from '../views/notFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',  name: 'Home',  component: Home },
  { path : '/books', name : 'Books' ,component : Books},
  { path : '/eBooks', name : 'E-Books' ,component : Ebook},
  { path : '/addbook', name : 'Add-Book' ,component : AddBook},
  { path : '/editBook/:data' , name : 'Edit-Book' , component : EditBook},
  { path : '/about',  name: 'About',  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')},
  
  { path : '**' ,name : 'notFound' ,component : NotFound}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
