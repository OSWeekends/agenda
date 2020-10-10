<template>
  <div class="mb-3">
    <h4 class="mb-0">
      {{ title }}
    </h4>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
