<template>
  <div class="mb-5">
    <div v-for="(content, idx) in track.content" :key="`content-${idx}`">
      <ScheduleStartingTime :content="content"/>
      <b-row class="my-3">
        <!-- TIME LINE (1ST COL) -->
        <ScheduleTimeLine :content="content"/>
        <ScheduleContentBox :content="content"/>
      </b-row>
    </div>
<!--    <pre> {{ track.content[0] }} </pre>-->
    <!-- <b-table :items="track.content" :fields="fields" outlined hover> -->
      <!-- Columna Hora -->
      <!-- <template v-slot:cell(startTime)="data">
        <ScheduleTableColTime :data="data"/>
      </template> -->

      <!-- Columna Contenido -->
      <!-- <template v-slot:cell(title)="data">
        <TalkTitle :title="data.item.title" />
        <TalkDescription v-if="data.item.description" :data="data.item.description" />
        <TalkTags v-if="data.item.tags" :tags="data.item.tags" />
        <TalkAuthors v-if="data.item.authors" :data="data.item.authors" />
      </template>

    </b-table> -->
  </div>
</template>

<script>
// import ScheduleTableColTime from './ScheduleTableColTime'
// import TalkTitle from './ScheduleTable/TalkTitle'
// import TalkDescription from './ScheduleTable/TalkDescription'
// import TalkTags from './ScheduleTable/TalkTags'
// import TalkAuthors from './ScheduleTable/TalkAuthors'

import ScheduleTimeLine from '@/components/ScheduleTimeLine'
import ScheduleStartingTime from '@/components/ScheduleStartingTime'
import ScheduleContentBox from '@/components/ScheduleContentBox'

export default {
  name: 'ScheduleTable',
  components: {
    ScheduleContentBox,
    ScheduleStartingTime,
    ScheduleTimeLine
    // ScheduleTableColTime,
    // TalkTitle,
    // TalkDescription,
    // TalkTags,
    // TalkAuthors
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

.content-description > p
  color #8C8D95
</style>
