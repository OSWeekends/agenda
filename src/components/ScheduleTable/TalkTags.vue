<template>
  <div class="tags d-flex justify-content-end">
    <b-badge variant="light" v-for="tag in tags" :key="tag" class="ml-2"> {{ tag }} </b-badge>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus">
</style>
