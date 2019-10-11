<template>
  <footer class="text-center">
    <p>Made with 💙 by OSWeekends <a href="https://github.com/OSWeekends/agenda/graphs/contributors" target="_blank">Guilders</a> 🦄</p>
    <p>
      <span class="parrot-img">
        <img src="../assets/parrot.gif" alt="parrot">
      </span>
      <b-button variant="link" @click="goUrl('https://github.com/OSWeekends/agenda?ref=agenda')">Editar en Github</b-button>
      <b-button variant="link" @click="goUrl('https://osweekends.com/?ref=agenda')">WebSite</b-button>
      <b-button variant="link" @click="goUrl('https://twitter.com/OS_weekends?ref=agenda')">Twitter</b-button>
      <span class="parrot-img">
        <img src="../assets/parrotright.gif" alt="parrot">
      </span>
    </p>
  </footer>
</template>

<script>

export default {
  name: 'BaseFooter',
  methods: {
    goUrl (href) {
      Object.assign(document.createElement('a'), {
        target: '_blank',
        href
      }).click()
    }
  }
}
</script>

<style lang="stylus">
.parrot-img
  display inline-block
  height 25px
  img
    height 100%

</style>
