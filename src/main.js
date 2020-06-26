import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitterSquare, faGithub, faFacebookSquare, faYoutubeSquare, faLinkedin, faInstagram, faTwitch, faMeetup, faDev, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faLink, faGamepad } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

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
  faGamepad)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
