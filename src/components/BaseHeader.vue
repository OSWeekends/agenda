<template>
  <header class="mb-3">
    <div class="base-header mb-3">
      <h1 class="title mt-1">{{ title }}</h1>
      <span class="time lead">
        <b-badge variant="info">{{ data.startTime }}</b-badge>
        <span class="text-muted px-2">-</span>
        <b-badge variant="info">{{ data.endTime }}</b-badge>
      </span>
    </div>
    <div class="d-flex justify-content-between align-self-center">
      <div class="description-item shadow-none p-3 bg-light rounded w-100">
        <blockquote class="blockquote mb-0">
          <footer class="blockquote-footer">{{ data.description }}</footer>
        </blockquote>
      </div>
      <div class="meetup-item mx-3 align-self-center">
        <a :href="data.meetupLink" title="Ver más en meetup">
          <font-awesome-icon :icon="['fab', 'meetup']" size="3x"/>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import data from '@/data'

export default {
  name: 'BaseHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      data
    }
  },
  methods: {
    goBack () {
      Object.assign(document.createElement('a'), { target: '_blank', href: 'https://osweekends.com' }).click()
    }
  }
}
</script>

<style lang="stylus">
.title
  font-weight 600

.meetup-item
  a
    color #f63f60
</style>
