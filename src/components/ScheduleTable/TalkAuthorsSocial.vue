<template>
  <ul class="list-inline">
    <li v-for="(item, i) in social" class="list-inline-item" :key="i">
      <a :href="item" class="ico-link" :class="`ico-${i}`">
        <font-awesome-icon :icon="getIcon(i)" />
      </a>
    </li>
  </ul>
</template>

<script>
const socialIco = {
  twitch: ['fab', 'twitch'],
  github: ['fab', 'github'],
  twitter: ['fab', 'twitter-square'],
  youtube: ['fab', 'youtube-square'],
  facebook: ['fab', 'facebook-square'],
  linkedin: ['fab', 'linkedin'],
  instagram: ['fab', 'instagram'],
  meetup: ['fab', 'meetup'],
  url: 'link'
}

export default {
  name: 'AuthorsSocial',
  props: {
    social: {
      type: Object
    }
  },
  methods: {
    getIcon (val) {
      return socialIco[val]
    }
  }
}
</script>

<style scoped>

</style>
