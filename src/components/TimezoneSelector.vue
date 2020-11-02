<template>
  <div class="timezone-selector">
    <b-form-select v-model="currentTimezone" :options="timezones"></b-form-select>
  </div>
</template>
<script>
import timezones from '@/data/timezones'
import { mapMutations } from 'vuex'
export default {
  data: () => ({
    // Get current timezone based on Intl API
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
    currentTimezone: timezones.find(tz => tz.utc.includes(Intl.DateTimeFormat().resolvedOptions().timeZone)),
    timezones: timezones.map(tz => ({ value: tz, text: tz.text }))
  }),
  watch: {
    currentTimezone (timezone, oldTimezone) {
      const validUTC = timezone.utc[0]
      // Save selected timezone on store
      if (timezone.offset !== oldTimezone.offset) this.setTimezone(validUTC)
    }
  },
  methods: {
    ...mapMutations({
      setTimezone: 'timezone/SET_CURRENTTIMEZONE'
    })
  }
}
</script>
