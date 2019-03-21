<template>
  <div class="base-header d-flex justify-content-between">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div class="d-flex align-items-center">
      <b-button variant="primary" @click="goBack">Volver a OSW</b-button>
    </div>
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
      console.log('VOLVER')
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
