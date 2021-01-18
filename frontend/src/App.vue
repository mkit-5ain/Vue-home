<template>
  <div id="app">
    <div id="nav">
      <ui-header/>
      <!-- <ui-aside/> -->
      <!-- <ui-footer/> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
  import Header from '@/components/Header.vue'
  // import Aside from '@/components/Aside.vue'
  // import Footer from '@/components/Footer.vue'

  export default {
    name: 'App',
    components: {
      'ui-header': Header,
      // 'ui-aside': Aside,
      // 'ui-footer': Footer
    }
  }
</script>
<style lang="scss">
  @import 'assets/sass/main.scss'
</style>
