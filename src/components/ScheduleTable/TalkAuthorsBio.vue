<template>
  <div>
    <p class="lead text-muted" v-for="(item, index) in bio" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AuthorsBio',
  props: {
    bio: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
