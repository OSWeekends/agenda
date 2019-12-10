<template>
  <div class="mb-5">
    <b-table :items="track.content" :fields="fields" outlined hover>
      <!-- Columna Hora -->
      <template v-slot:cell(startTime)="data">
        <ScheduleTableColTime :data="data"/>
      </template>

      <!-- Columna Contenido -->
      <template v-slot:cell(title)="data">
        <TalkTitle :title="data.item.title" :type="data.item.type" :variant="data.item.variant" />
        <TalkDescription v-if="data.item.description" :data="data.item.description" />
        <TalkTags v-if="data.item.tags" :tags="data.item.tags" />
        <TalkAuthors v-if="data.item.authors" :data="data.item.authors" />
      </template>

    </b-table>
  </div>
</template>

<script>
import ScheduleTableColTime from './ScheduleTableColTime'
import TalkTitle from './ScheduleTable/TalkTitle'
import TalkDescription from './ScheduleTable/TalkDescription'
import TalkTags from './ScheduleTable/TalkTags'
import TalkAuthors from './ScheduleTable/TalkAuthors'

export default {
  name: 'ScheduleTable',
  components: {
    ScheduleTableColTime,
    TalkTitle,
    TalkDescription,
    TalkTags,
    TalkAuthors
  },
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
