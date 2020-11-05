import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import customParseFormat from 'dayjs/plugin/customParseFormat'
// DayJs config
import 'dayjs/locale/es'
const localTimezone = 'Europe/Madrid'
dayjs.locale('es')
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)
dayjs.tz.setDefault(localTimezone)

const state = () => ({
  currentTimezone: localTimezone,
  eventDate: ''
})

const mutations = {
  SET_CURRENTTIMEZONE (state, value) {
    state.currentTimezone = value
  },
  SET_EVENTDATE (state, value) {
    state.eventDate = value
  }
}

const actions = {
  setFormattedEventDate ({ commit }, date) {
    if (!date) return ''
    const formattedDate = dayjs(date, 'DD MMMM YYYY HH:mm').toISOString()
    commit('SET_EVENTDATE', formattedDate)
  },

  updateTimezone ({ commit }, timezone) {
    const newTimezone = timezone || localTimezone
    commit('SET_CURRENTTIMEZONE', newTimezone)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
