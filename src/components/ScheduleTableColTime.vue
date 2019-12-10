<template>
  <div class="time-col">
    <div class="time">
      <span class="time--h">{{ data.item.startTime.h }}</span>
      <span class="colon">:</span>
      <span class="time--m">{{ data.item.startTime.m }}</span>
    </div>
    <div class="time">
      <span class="time--h">{{ data.item.endTime.h }}</span>
      <span class="colon">:</span>
      <span class="time--m">{{ data.item.endTime.m }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleTableColTime',
  props: {
    data: {
      required: true,
      type: Object || Array
    }
  }
}
</script>

<style scoped>

</style>
