<template>
  <div>Twitch Effect</div>
</template>
<script>
export default {
  name: 'TwitchIsLive',
  data () {
    return {
      isLive: false
    }
  },
  created () {
    this.fetchIsLive()
  },
  methods: {
    fetchIsLive () {
      const twitchApiUrl = 'https://api.twitch.tv/helix/search/channels?query=osweekends'
      fetch(twitchApiUrl, {
        method: 'get',
        headers: new Headers({
          // Authorization: `Bearer ${process.env.VUE_APP_TW_CLIENT_SECRET}`,
          // 'client-id': process.env.VUE_APP_TW_CLIENT_ID
          Authorization: `Bearer ${process.env.VUE_APP_TW_CLIENT_SECRET_NELO}`,
          'Client-ID': process.env.VUE_APP_TW_CLIENT_ID_NELO
        })
      })
        .then(function (response) {
          return response.json()
        })
        .then((data) => {
          this.isLive = data.data[0].is_live
        })
    }
  }
}
</script>
