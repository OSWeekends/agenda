<template>
  <div>
    <div class="starting-time">
      <span class="starting-time__start-time font-weight-bold mr-1 text-monospace">
        {{ timeOnSelectedTimezone }}
      </span>
      <span class="starting-time__circle d-inline-block"/>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import '@/filters/timezone'
import dayjs from 'dayjs'

export default {
  name: 'ScheduleTime',
  props: {
    content: {
      required: true,
      type: Object
    }
  },
  computed: {
    ...mapState({
      currentTimezone: state => state.timezone.currentTimezone,
      eventDate: state => dayjs(state.timezone.eventDate).format('DD/MM/YYYY')
    }),
    timeOnSelectedTimezone () {
      const { h, m } = this.content
      const timezoneDate = this.$options.filters.timezoneDate(`${this.eventDate} ${h}:${m}`, this.currentTimezone)
      return this.$options.filters.formattedDate(timezoneDate, 'H:mm')
    }
  }
}
</script>

<style lang="stylus">
main-blue = #003DA5
.starting-time
  &__time-container
    display flex
    justify-content space-between
    align-items center

  &__start-time
    color main-blue

  &__circle
    position relative
    width 14px
    height 14px
    background main-blue
    border-radius 50%
    border 3.5px solid #C7D4EB
</style>
