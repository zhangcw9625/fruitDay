<template>
  <div id="app">

    <router-view></router-view>

    <footer-box></footer-box>
  </div>
</template>

<script>

import FooterBox from './components/pages/Home/Footer'
import XQ from './components/pages/classplus/XQ'

export default {
  name: 'App',
  components: {
    FooterBox,XQ
  },
  created(){
  	this.$store.dispatch("initCars")
  }
}
</script>

<style lang='scss'>

</style>
