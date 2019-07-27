// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// Vue App
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';

// Bootstrap Vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Components
import Start from './components/Start';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';

//Firebase
import { firestorePlugin } from 'vuefire';


const db = Firebase.firestore();
import Firebase from 'firebase';
const auth = Firebase.auth();

// Vue configs
Vue.use(VueRouter);
Vue.use(firestorePlugin);
Vue.use(BootstrapVue);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Start
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: '/profile',
      component: Profile,
      meta: { requiresAuth: true },
    }

  ]
});



router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = auth.currentUser;
  if (requiresAuth && !currentUser) {
    next('/')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
});


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
}).$mount('#app');
