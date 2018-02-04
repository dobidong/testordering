import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp'

Vue.use(VueRouter)
import store from './store'
import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'
import New from './components/New.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import Item from './components/Item.vue'


const router = new VueRouter ({
  mode: 'history',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup },
    { path: '/new', component: New },
    { path: '/shoppingCart', component: ShoppingCart },
    { path: '/item', component: Item }
  ]
})

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user)
    router.push('/dashboard')
  } else {
    router.replace('/signin')
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h=> h(App)
})
