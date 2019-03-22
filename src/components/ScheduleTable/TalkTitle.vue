<template>
  <div>
    <h4>
      <b-badge v-if="type" :variant="badgeVariant(type)"> · </b-badge>
      {{ title }}
    </h4>
  </div>
</template>

<script>
const variants = [
  'primary',
  'success',
  'danger'
]

export default {
  props: {
    type: {
      required: false
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    badgeVariant (type) {
      return variants[type - 1]
    }
  }
}
</script>

<style scoped>

</style>
