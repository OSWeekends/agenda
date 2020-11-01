<template>
  <header class="mb-3">
    <div class="base-header d-flex justify-content-between align-items-center mb-3 justify-content-md-start">
      <div class="flex-header-item">
        <h1 class="title m-0">
          {{ headerData.title }}
          <small class="date">
            {{ headerData.date }}
          </small>
        </h1>
      </div>
      <div class="flex-header-item">
        <CBadge class="mr-2 ml-md-2">{{ headerData.eventType }}</CBadge>
      </div>
    </div>

    <div class="d-flex justify-content-between align-self-center justify-content-md-end">
      <div class="description-item pr-3">
        <div class="mb-0"> {{ headerData.description }}</div>
      </div>
      <div class="meetup-item align-self-start">
        <a class="text-body" :href="headerData.meetupLink" title="Ver más en meetup" target="_blank">
          <font-awesome-icon :icon="['fab', 'meetup']" size="2x"/>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import CBadge from '@/components/CustomBadge'

export default {
  name: 'BaseHeader',
  components: {
    CBadge
  },
  props: {
    headerData: {
      type: Object,
      required: true
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
</style>
