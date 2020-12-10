<template>
  <b-col cols="1" sm="auto">
    <div class="time-line-bar-container">
      <div class="time-line-bar rounded"/>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'ScheduleTimeLine'
}
</script>

<style lang="stylus" scoped>
.time-line-bar-container
  position relative
  width 71px
  height 100%

.time-line-bar
  width 4px
  background-color var(--color-border)
  height 100%
  position absolute
  right 0

</style>
