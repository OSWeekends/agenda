<template>
  <div class="badge--soft-blue">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.badge--soft-blue
  display inline-block
  background-color var(--color-background-highlight)
  color var(--color-text-secondary)
  padding  5px 15px
  margin 5px
  margin-left 0
  border-radius 10px
  font-size 14px
  font-family 'Nunito'
</style>
