<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
import Header from './components/header/header.vue'
import Footer from './components/footer/footer.vue'
export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  created () {
    this.$store.dispatch('tryAutoLogin')
  }
}
</script>

<style>
  body, html {
    position: relative;
    min-height: 100vh;
    margin-bottom: 56px;
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  #app {
    padding-bottom: 84px;
  }
</style>
