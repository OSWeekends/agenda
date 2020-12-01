<template>
  <header class="mb-3">
    <div class="d-flex">
      <div class="base-header d-flex justify-content-between align-items-center mb-3 justify-content-md-start">
        <div class="flex-header-item">
          <h1 class="title m-0 font-weight-bold">
            {{ headerData.title }}
            <small class="date">
              {{ dateOnSelectedTimezone }}
            </small>
          </h1>
        </div>
        <div class="flex-header-item">
          <CBadge class="mr-2 ml-md-2">{{ headerData.eventType }}</CBadge>
          <CBadge class="mr-2 ml-md-2 christmas-badge"> ⛄ Christmas Edition</CBadge>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <!-- Timezone selector -->
        <div v-if="headerData.isTimezoneSelectorEnabled">
          <TimezoneSelector />
        </div>
        <!-- END: Timezone selector -->
        <div class="meetup-item align-self-start">
          <a class="text-body" :href="headerData.meetupLink" title="Ver más en meetup" target="_blank">
            <font-awesome-icon :icon="['fab', 'meetup']" size="2x"/>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CBadge from '@/components/CustomBadge'
import TimezoneSelector from '@/components/TimezoneSelector'
import { mapState } from 'vuex'
import dayjs from 'dayjs'

export default {
  name: 'BaseHeader',
  components: {
    TimezoneSelector,
    CBadge
  },
  props: {
    headerData: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isTimeZoneSelectorActive: false
  }),
  computed: {
    ...mapState({
      currentTimezone: state => state.timezone.currentTimezone,
      eventDate: state => dayjs(state.timezone.eventDate).format('DD/MM/YYYY H:mm')
    }),
    dateOnSelectedTimezone () {
      const timezoneDate = this.$options.filters.timezoneDate(this.eventDate, this.currentTimezone)
      return this.$options.filters.formattedDate(timezoneDate, 'DD MMMM YYYY')
    }
  }
}
</script>

<style lang="stylus">
main-blue = #003DA5

.base-header
  margin-top 60px

  .flex-header-item
    &:last-child
      margin-bottom: -15px

  .title
    font-size 36px
    font-weight 600
    color main-blue

    small.date
      font-size 18px
      font-weight bold
      margin-left 7px

  .meetup-item
    a
      &:hover
        color #f63f60
        text-decoration none

  .description-item
    color #8C8D95
    font-weight 500

.timezone-disclaimer
  font-size: 14px

.christmas-badge
  color white
  background #f00000
</style>
