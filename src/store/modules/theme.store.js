const state = () => ({
  // theme is a name, so we potentially could have different palettes
  name: window.localStorage.getItem('theme') || 'light'
})

const mutations = {
  SET_THEME (state, value) {
    state.name = value
  }
}

const actions = {
  setThemeName ({ commit }, themeName = 'light') {
    window.localStorage.setItem('theme', themeName)
    document.documentElement.setAttribute('data-theme', themeName)

    commit('SET_THEME', themeName)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
