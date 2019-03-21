<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <BaseHeader title="Agenda Marzo 2019"/>
    <ScheduleList :data="data"/>

  </div>
</template>

<script>
// @ is an alias to /src
import BaseHeader from '@/components/BaseHeader.vue'
import ScheduleList from '@/components/ScheduleList.vue'
import data from '@/data'

export default {
  name: 'home',
  components: {
    BaseHeader,
    ScheduleList
  },
  data () {
    return {
      data
    }
  }
}
</script>
