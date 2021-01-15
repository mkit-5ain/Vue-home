<template>
  <div id="header">
    <router-link to="/"><img class="logo" src="../assets/images/logo.svg" alt="로고"></router-link>
    <div class="page-title">Index</div>
    <button class="menu-btn" @click="handle_toggle">
      <div></div>
      <div></div>
    </button>
    <div class="menu-view" v-show="is_show">
      <div class="menu-dim"></div>
      <div class="menu-view-menubox">
        <ul class="menubox-list">
          <li class="list index"><a href="index.html">Index</a></li>
          <li class="list exp">Experience</li>
          <li class="list cont"><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="menu-theme">
        <div class="theme-list">
          <span class="theme-type">
            <span class="light">Light</span>
            <span class="dark">Dark</span>
          </span>&nbsp;Mode
        </div>
        <div class="theme-list-icon">
          <div class="theme-light"></div>
          <div class="theme-dark"></div>
        </div>
      </div>
    </div>
    <ul class="fixed-info">
      <li>0</li>
      <li>1</li>
      <li>0</li>
      <li>·</li>
      <li>5</li>
      <li>5</li>
      <li>5</li>
      <li>8</li>
      <li>·</li>
      <li>0</li>
      <li>0</li>
      <li>8</li>
      <li>7</li>
      <li>·</li>
      <li>임</li>
      <li>준</li>
      <li>수</li>
    </ul>
  </div>
</template>
<style lang="scss">
  #header {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 10;
    display: flex;
    width: calc(100% - 60px);
    margin: 30px;
    justify-content: space-between;
    .logo {
      width: 40px;
      height: 40px;
      transition: 0.1s ease-in-out;
    }
    .page-title {
      line-height: 40px;
      font-size: 16px;
      font-weight: bold;
    }
    .fixed-info {
      position: fixed;
      top: 100px;
      right: 45px;
      z-index: 10;
      width: 10px;
      text-align: center;
      li {
        transform: rotate(360deg);
        animation: textRotate 5s 1s infinite;
        animation-fill-mode: forwards;
      }
    }
  }
</style>
<script>
export default {
  name: 'Header',
  data: () => { // #1
    return {
      is_show: false
    }
  },
  methods:{
    handle_toggle: function(){
      this.is_show = !this.is_show; // #2, #3
    },
  }
}
</script>
