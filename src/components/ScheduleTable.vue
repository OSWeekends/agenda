<template>
  <div>
    <b-table :items="track.content" :fields="fields" outlined hover>
      <template slot="startTime" slot-scope="data">
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
      <template slot="title" slot-scope="data">
        <p>
          <b-badge v-if="data.item.type" :variant="badgeVariant(data.item.type)"> · </b-badge>
          {{ data.item.title }}
        </p>

        <p v-if="data.item.description">
          {{ data.item.description }}
        </p>

        <template v-if="data.item.authors" >
          <p v-for="(author, idx) in data.item.authors" :key="idx">
            {{ author.name }} - {{ author.social }}
          </p>
        </template>

      </template>
    </b-table>
  </div>
</template>

<script>
const variants = [
  'primary',
  'success',
  'danger'
]

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
        {
          key: 'startTime',
          label: 'Hora',
          class: 'time-column'
        },
        {
          key: 'title',
          label: this.track.name
        }
      ]
    }
  },
  methods: {
    badgeVariant (type) {
      return variants[type - 1]
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

.time-column
  width 96px
  background-color: #fafafa

</style>
