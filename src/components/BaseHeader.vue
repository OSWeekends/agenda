<template>
  <header>
    <div class="base-header d-flex justify-content-between">
      <h1 class="title">
        {{ title }}
        <small class="time">
          <b-badge variant="info">{{ data.startTime }}</b-badge>
          <span class="text-muted px-2">-</span>
          <b-badge variant="info">{{ data.endTime }}</b-badge>
        </small>
      </h1>
      <b-button class="align-self-center" variant="primary" @click="goBack">Volver a OSW</b-button>
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
  .time
    font-size 16px
    vertical-align middle
</style>
