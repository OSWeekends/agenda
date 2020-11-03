import Vue from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import data from '../data'
// DayJs config
require('dayjs/locale/es')
dayjs.locale('es')
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Europe/Madrid')

Vue.filter('timezoneTime', function (time, timezone) {
  const selectedTimezone = timezone || 'Europe/Madrid'
  if (!time) return ''
  if (!data.isTimezoneSelectorEnabled) return time
  return dayjs(`12/12/12 ${time}`).tz(selectedTimezone).format('HH:mm')
})
