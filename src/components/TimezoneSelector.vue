<template>
  <div class="timezone-selector">
    <b-dropdown id="dropdown-1" text="🗺" class="m-md-2" variant="outline-primary">
      <b-dropdown-item v-for="timezone in timezones" :key="timezone.text" @click="selectTimezone(timezone)">
        {{ timezone.text }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import timezones from '@/data/timezones'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      // Get current timezone based on Intl API
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
      selectedTimezone: undefined,
      timezones: timezones
    }
  },
  computed: {
    ...mapState({
      currentTimezone: state => state.timezone.currentTimezone
    })
  },
  // watch: {
  //   selectedTimezone (timezone, oldTimezone) {
  //     const validUTC = timezone.utc[0]
  //     // Save selected timezone on store
  //     if (oldTimezone && timezone.offset !== oldTimezone.offset) {
  //       this.updateTimezone(validUTC)
  //       localStorage.timezone = validUTC
  //     }
  //   }
  // },
  // mounted () {
  //   this.selectedTimezone = this.initialTimezone
  // },
  methods: {
    ...mapActions({
      updateTimezone: 'timezone/updateTimezone'
    }),
    selectTimezone (tz) {
      this.selectedTimezone = tz
    }
  }
}
</script>
