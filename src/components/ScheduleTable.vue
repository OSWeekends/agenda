<template>
  <div>
    <b-table :items="track.content">

    </b-table>
  </div>
</template>

<script>
export default {
  name: 'ScheduleTable',
  props: {
    track: {
      type: Object,
      required: true
    }
  }
}
</script>
