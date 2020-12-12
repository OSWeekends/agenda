<template>
  <footer class="text-center">
    <p>Made with 💙 by OSWeekends
      <a class="blue-text" href="https://github.com/OSWeekends/agenda/graphs/contributors" target="_blank">Guilders</a>
      🦄
    </p>
    <p>
      <span class="parrot-img">
        <img src="../assets/parrot.gif" alt="parrot">
      </span>
      <b-button variant="link" class="blue-text" to="/about">About</b-button>
      <b-button variant="link" class="blue-text" href="https://github.com/OSWeekends/agenda?ref=agenda">
        Editar en Github
      </b-button>
      <b-button variant="link" class="blue-text" href="https://osweekends.com/?ref=agenda">OSWeekends</b-button>
      <b-button variant="link" class="blue-text" href="https://twitter.com/OS_weekends?ref=agenda">Twitter</b-button>
      <span class="parrot-img">
        <img src="../assets/parrotright.gif" alt="parrot">
      </span>
    </p>
  </footer>
</template>

<script>

export default {
  name: 'BaseFooter'
}
</script>

<style lang="stylus">
footer
  background-color var(--color-background-light)
  height 230px
  padding-top 50px
  font-size 14px

  .blue-text
    color var(--color-text-action)
    font-size 14px

  .parrot-img
    display inline-block
    height 25px

    img
      height 100%

</style>
