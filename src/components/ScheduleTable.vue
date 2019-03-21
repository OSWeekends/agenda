<template>
  <div>
    <b-table :items="track.content" :fields="fields" outlined hover>
      <template slot="hora" slot-scope="data">
        <!--<pre>{{ data.item }}</pre>-->
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
      </template>
      <template slot="name" slot-scope="data">
        <p>
          <b-badge v-if="data.item.type"> · </b-badge>
          {{ data.item.name }}
        </p>
      </template>
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
  },
  data () {
    return {
      fields: [
        'hora',
        {
          key: 'name',
          label: 'Lugar'
        }
      ]
    }
  },
  computed: {
    badgeVariant () {
      return this.data
    }
  }
}
</script>

<style lang="stylus">
.time
  font-family monospace
  .time--h
    font-weight bold
    font-size 1.7rem

  .time--m
    font-size 1.3rem

  .colon
    position relative
    margin 0 1px
    font-size 1.1rem

</style>
