<template>
  <div class="timezone-selector">
    <b-form-select v-model="selectedTimezone" :options="timezones"></b-form-select>
  </div>
</template>
<script>
import timezones from '@/data/timezones'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      // Get current timezone based on Intl API
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
      selectedTimezone: undefined,
      timezones: timezones.map(tz => ({ value: tz, text: tz.text }))
    }
  },
  computed: {
    ...mapState({
      currentTimezone: state => state.timezone.currentTimezone
    }),
    initialTimezone () {
      return timezones.find(tz => tz.utc.includes(this.currentTimezone || Intl.DateTimeFormat().resolvedOptions().timeZone))
    }
  },
  watch: {
    selectedTimezone (timezone, oldTimezone) {
      const validUTC = timezone.utc[0]
      // Save selected timezone on store
      if (timezone.offset !== oldTimezone.offset) {
        this.setTimezone(validUTC)
        localStorage.timezone = validUTC
      }
    }
  },
  mounted () {
    this.selectedTimezone = this.initialTimezone
  },
  methods: {
    ...mapMutations({
      setTimezone: 'timezone/SET_CURRENTTIMEZONE'
    })
  }
}
</script>
