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
  background-color #F1F6FF
  color #4875C0
  padding  5px 15px
  margin 5px
  border-radius 10px
  font-weight bold
  font-size 14px
</style>
