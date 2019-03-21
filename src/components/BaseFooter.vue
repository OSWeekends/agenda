<template>
  <footer class="text-center">
    <p>Made with 💙 by OSWeekends Guilders 🦄</p>
    <p>
      <b-button variant="link" @click="goUrl('https://github.com/OSWeekends/agenda?ref=agenda')">Github</b-button>
      <b-button variant="link" @click="goUrl('https://osweekends.com/?ref=agenda')">Open Source Weekends</b-button>
      <b-button variant="link" @click="goUrl('https://invitations-osweekends.herokuapp.com/?ref=agenda')">Slack</b-button>
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
