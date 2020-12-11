import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitterSquare, faGithub, faFacebookSquare, faYoutubeSquare, faLinkedin, faInstagram, faTwitch, faMeetup, faDev, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faLink, faGamepad, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(
  faTwitterSquare,
  faGithub,
  faFacebookSquare,
  faYoutubeSquare,
  faLinkedin,
  faInstagram,
  faTwitch,
  faLink,
  faMeetup,
  faDev,
  faMedium,
  faGamepad,
  faMapMarkerAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

// Initialize data-theme from the Vuex store
document.documentElement.setAttribute('data-theme', store.state.theme.name)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
