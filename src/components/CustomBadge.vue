<template>
  <div class="badge soft-blue">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.badge
  display inline-block
  padding  5px 15px
  margin 5px
  border-radius 10px
  font-size 14px
  font-family 'Nunito'

  &.soft-red {
    background-color #FFF1F1
    color #C04848
  }

  &.soft-blue {
    background-color #F1F6FF
    color #4875C0
  }
</style>
