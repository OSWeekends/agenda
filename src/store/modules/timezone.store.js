const state = () => ({
  currentTimezone: ''
})

const mutations = {
  SET_CURRENTTIMEZONE (state, value) {
    state.currentTimezone = value
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
