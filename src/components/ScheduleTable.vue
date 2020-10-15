<template>
  <div class="mb-5">
    <div v-for="(content, idx) in track.content" class="d-flex" :key="`content-${idx}`">
      <!-- TIME LINE (1ST COL) -->
      <div class="time-line d-flex mt-2 py-2">
        <div class="start-time font-weight-bold mr-1">
          {{content.startTime.h}}:{{content.startTime.m}}
        </div>
        <div>
          <div class="time-line__circle"></div>
          <div class="time-line__line mx-auto my-2"></div>
        </div>
      </div>
      <!-- Contenido (2nd COL) -->
      <div class="content-box bg-white rounded-lg p-3 ml-3 mb-3">
        <h1>Contenido:</h1>
      </div>
    </div>
    <pre> {{ track.content[0] }} </pre>
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

export default {
  name: 'ScheduleTable',
  components: {
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
.time-line
  position relative

  .start-time
    color #003DA5

  &__circle
    position relative
    top 4px
    width 14px
    height 14px
    background blue
    border-radius 50%
    border 3.5px solid #C7D4EB

  &__line
    width 4px
    height 100%
    background-color #E1EAFC
    border-radius 2px
</style>
