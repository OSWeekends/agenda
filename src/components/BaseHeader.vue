<template>
  <header class="mb-3">
    <div class="base-header d-flex justify-content-between align-items-center mb-3">
      <div class="flex-header-item d-flex flex-direction-row">
        <h1 class="title m-0 font-weight-bold">
          {{ headerData.title }}
          <small class="date">
            {{ dateOnSelectedTimezone }}
          </small>
        </h1>
        <CBadge class="mr-2 ml-md-2 christmas-badge"> ⛄ Christmas Edition </CBadge>
      </div>
      <!-- <ThemeSwitch />-->
    </div>
    <!-- Timezone selector -->
    <div class="flex-column justify-start mb-4" v-if="headerData.isTimezoneSelectorEnabled">
      <b-row>
        <b-col lg="6">
          <p v-if="!isUserInMadrid" class="timezone-disclaimer">Nos han chivado que no estás en España (o al menos en la zona horaria de españa), no te preocupes, cambiamos el horario a tu zona para que nos puedas ver</p>
        </b-col>
      </b-row>
      <b-row align-h="between">
        <b-col lg="4" md="12">
          <b-button class="timezone-button" v-if="!isTimeZoneSelectorActive && isUserInMadrid" size="sm" variant="light" @click="isTimeZoneSelectorActive = true">
            Cambiar a otra zona horaria</b-button>
          <TimezoneSelector v-if="isTimeZoneSelectorActive || !isUserInMadrid"/>
        </b-col>
      </b-row>
    </div>
    <!-- END: Timezone selector -->

    <div class="d-flex justify-content-between align-self-center justify-content-md-end">
      <div class="description-item pr-3">
        <div class="mb-0"> {{ headerData.description }}</div>
      </div>
      <div class="meetup-item align-self-start">
        <a class="icon" :href="headerData.meetupLink" title="Ver más en meetup" target="_blank">
          <font-awesome-icon :icon="['fab', 'meetup']" size="2x"/>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import CBadge from '@/components/CustomBadge'
// import ThemeSwitch from '@/components/ThemeSwitch'
import TimezoneSelector from '@/components/TimezoneSelector'
import { mapState } from 'vuex'
import dayjs from 'dayjs'

export default {
  name: 'BaseHeader',
  components: {
    TimezoneSelector,
    CBadge
    // ThemeSwitch
  },
  props: {
    headerData: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isTimeZoneSelectorActive: false,
    isUserInMadrid: Intl.DateTimeFormat().resolvedOptions().timeZone === 'Europe/Madrid'
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
.base-header
  margin-top 60px

  .flex-header-item
    &:last-child
      margin-bottom: -15px

  .title
    font-size 36px
    font-weight 600
    color var(--color-main)

    small.date
      font-size 18px
      margin-left 7px
      margin-right 10px

.meetup-item
  a
    color var(--color-text)
    transition color 200ms ease-in
    &:hover
      color var(--color-main) !important
      text-decoration none

.description-item
  color var(--color-text-secondary)
  font-weight 500

.timezone-disclaimer
  font-size: 14px

.christmas-badge
  color var(--color-background-light)
  background #f00000
  margin-top 13px

.timezone-button
  background-color var(--color-background-highlight) !important
  color var(--color-main) !important
</style>
