import Vue from 'vue'
import Vuex from 'vuex'
import timezone from './modules/timezone.store'
import theme from './modules/theme.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    timezone,
    theme
  }
})
