<template>
  <b-col cols="1" sm="auto">
    <div class="time-line-bar-container">
      <div class="time-line-bar rounded" />
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'ScheduleTimeLine',
  props: {
    content: {}
  }
}
</script>

<style lang="stylus" scoped>
main-blue = #003DA5

.time-line-bar-container
  position relative
  width 71px
  height 100%

.time-line-bar
  width 4px
  background-color #E1EAFC
  height 100%
  position absolute
  right 0

</style>
