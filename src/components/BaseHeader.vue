<template>
  <div class="base-header d-flex justify-content-between">
    <h1>{{ title }}</h1>
    <b-button class="align-self-center" variant="primary" @click="goBack">Volver a OSW</b-button>
  </div>
</template>

<script>

export default {
  name: 'BaseHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    goBack () {
      console.log('VOLVER a osweekends.com')
    }
  }
}
</script>
