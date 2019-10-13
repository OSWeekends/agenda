<template>
  <div class="description">
    <p class="lead" v-for="(desc, index) in data" :key="index" >
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus">
.description
  p
    word-break break-word
</style>
