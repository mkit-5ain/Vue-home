<template>
  <div id="header">
    <router-link to="/"><img class="logo" src="../assets/images/logo.svg" alt="로고"></router-link>
    <div class="page-title">Index</div>
    <button class="menu-btn" @click="toggle">
      <div></div>
      <div></div>
    </button>
    <div class="menu-view" :class="{ active:isActive }">
      <div class="menu-dim" @click="toggle"></div>
      <div class="menu-view-menubox">
        <ul class="menubox-list">
          <li class="list index" @click="toggle">
            <router-link to="/">
              <span>Index</span>
            </router-link>
          </li>
          <li class="list exp" @click="toggle">
            <router-link to="/experience">
              <span>Experience</span>
            </router-link>
          </li>
          <li class="list cont" @click="toggle">
            <router-link to="/contact">
              <span>Contact</span>
            </router-link>
          </li>
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
    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 10;
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
      display: none;
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
  @media screen and (max-width: 750px) {
    #header {
      width: calc(100% - 10vw);
      margin: 5vw;
      .logo {
        width: 30px;
        height: 30px;
      }
      .page-title {
        font-size: 14px;
        line-height: 30px;
      }
      .menu-btn {
        width: 30px;
        height: 30px;
        border: 1px solid #000;
        div {
          height: 1px;
          &:nth-child(1) {
            top: 9px;
            left: calc(50% - 7px);
            width: 14px;
          }
          &:nth-child(2) {
            top: 19px;
            left: calc(50% - 7px);
            width: 14px;
          }
        }
      }
    }
  }
</style>
<script>
export default {
  name: 'Header',
  data: () => {
    return {
      isActive: false
    }
  },
  methods:{
    toggle() {
      this.isActive = !this.isActive;
    }
  }
}
</script>
