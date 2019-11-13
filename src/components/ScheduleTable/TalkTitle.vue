<template>
  <div class="mb-3">
    <h4 class="mb-0">
      <b-badge :variant="variant"> · </b-badge>
      {{ title }}
    </h4>
    <b-badge v-if="type"> {{ type }} </b-badge>
  </div>
</template>

<script>

export default {
  props: {
    variant: {
      required: false
    },
    type: {
      required: false
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
