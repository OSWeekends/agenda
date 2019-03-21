<template>
  <div class="home">
    <BaseHeader :title="data.title"/>
    <ScheduleList :tracks="data.tracks" />
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'
import ScheduleList from '@/components/ScheduleList.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import data from '@/data/index'

export default {
  name: 'home',
  components: {
    BaseHeader,
    ScheduleList,
    BaseFooter
  },
  data () {
    return {
      data
    }
  }
}
</script>
