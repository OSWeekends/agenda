import Vue from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import data from '../data'
// DayJs config
import 'dayjs/locale/es'
dayjs.locale('es')
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)
dayjs.tz.setDefault('Europe/Madrid')

Vue.filter('timezoneDate', function (date, timezone) {
  const selectedTimezone = timezone || 'Europe/Madrid'
  if (!date) return ''
  if (!data.isTimezoneSelectorEnabled) return dayjs(date, 'DD/MM/YYYY H:mm', 'es')
  if (!timezone) dayjs(date, 'DD/MM/YYYY H:mm', 'es').tz('Europe/Madrid')
  return dayjs(date, 'DD/MM/YYYY H:mm', 'es').tz(selectedTimezone)
})

Vue.filter('formattedDate', function (date, format) {
  if (!date) return ''
  if (!format) return date
  return dayjs(date).format(format)
})
