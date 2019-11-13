<template>
  <div class="description">
    <p class="lead" v-for="(desc, index) in data" :key="index" >
      <span v-html="desc"></span>
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
