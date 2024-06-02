<template>
  <div id="app">
    <SiteNavbar />
    <router-view />
  </div>
</template>

<script>
import SiteNavbar from './components/SiteNavbar.vue'

export default {
  name: 'App',
  components: {
    SiteNavbar
  }
}
</script>

<style>
@import './assets/style.css';
</style>
