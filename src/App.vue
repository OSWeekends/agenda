<template>
  <div id="app" ref="root">
    <router-view/>
  </div>
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&family=Open+Sans:wght@400;600;700&display=swap');

body
  margin 0
  background-color #F9FAFC !important

#app
   font-family 'Open Sans', sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50

</style>
