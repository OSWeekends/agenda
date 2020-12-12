<template>
  <b-row v-if="isLive" class="mb-5 mb-sm-2">
    <b-col cols="1" sm="auto">
      <div style="width: 71px"></div>
    </b-col>
    <b-col>
      <a href="https://www.twitch.tv/osweekends" class="text-decoration-none" title="¡OSWeekends está emitiendo!">
        <div class="box-is-live p-5 d-flex flex-column flex-sm-row justify-content-between align-items-center shadow-sm rounded">
          <div>
            <h3 class="m-0 text-center text-sm-right mb-3 mb-sm-0">
              ¡OSWeekends está en directo!
            </h3>
          </div>
          <div class="mx-5 mt-5 mt-sm-0">
            <div class="my-3 loader d-flex justify-content-center align-items-center"/>
          </div>
        </div>
      </a>
    </b-col>
  </b-row>
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
          Authorization: `Bearer ${process.env.VUE_APP_TW_ACCESS_TOKEN}`,
          'Client-ID': process.env.VUE_APP_TW_CLIENT_ID
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

<style lang="stylus">
.box-is-live
  color var(--color-text)
  background var(--color-background-highlight)
  box-shadow 2px 2px var(--color-background-shadow)

.loader {
  animation: pulse 2s infinite ease-out;
}

.loader::before {
  animation: ripple1 2s infinite ease-out;
}

.loader::after {
  animation: ripple2 2s infinite ease-out;
}

/* Keyframes */
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0;
  }
  15% {
    transform: scale(1.3);
    opacity: 1;
  }
  80%, 100% {
    opacity: 0;
  }
}

@keyframes ripple1 {
  0%, 10% {
    opacity: 0;
  }
  80% {
    transform: scale(2);
    opacity: 1;
  }
}

@keyframes ripple2 {
  0%, 25% {
    opacity: 0;
  }
  80% {
    transform: scale(2);
    opacity: 1;
  }
}

/* General styles */
.loader {
  width: 20px;
  height: 20px;
  background: var(--color-main);
  border-radius: 50%;
}

.loader::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  border: 0.25em solid var(--color-main);
  border-radius: 50%;
}

.loader::after {
  content: "";
  position: absolute;
  width: 50px;
  height: 50px;
  border: 0.25em solid var(--color-main);
  border-radius: 50%;
  opacity: 0;
}
</style>
