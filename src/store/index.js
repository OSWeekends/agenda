import Vue from 'vue'
import Vuex from 'vuex'
import timezone from './modules/timezone.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    timezone
  }
})
