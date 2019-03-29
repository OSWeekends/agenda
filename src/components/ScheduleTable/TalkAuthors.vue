<template>
  <div>
    <template v-for="(auth, idx) in data" >
      <div :key="`auth_${idx}`">
        <h5>{{ auth.name }}</h5>
        <AuthorsSocial v-if="auth.social" :social="auth.social"/>
        <AuthorsBio v-if="auth.bio" :bio="auth.bio"/>
      </div>
    </template>
  </div>
</template>

<script>
import AuthorsSocial from './TalkAuthorsSocial'
import AuthorsBio from './TalkAuthorsBio'

export default {
  components: {
    AuthorsSocial,
    AuthorsBio
  },
  props: {
    data: {
      type: Array,
      reuired: true
    }
  }
}
</script>
