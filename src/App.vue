<template>
  <div id="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Footer
  },

  mounted() {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Code:300,400,500&display=swap');
@font-face { font-family: "GilroyB"; src: url('./assets/GilroyBold.ttf'); }
@font-face { font-family: "GilroyEB"; src: url('./assets/GilroyExtraBold.otf'); }

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Fira Code', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  font-size: 16px;
  font-weight: 300;
}

.altColor {
  color: #ff5b00;
}

a {
  color: #ff5b00;
}

sup {
  font-size: 9px;
}

h3 {
  font-family: "GilroyEB";
}

.el-loading-spinner .path {
  stroke: #000000 !important;
}

.el-loading-text {
  font-family: "Fira Code";
  color: #000000 !important;
  font-weight: 500;
}

.el-tooltip__popper.is-dark {
  font-family: "Fira Code";
}

.el-button {
  border: 1px solid black !important;
  font-family: "GilroyB";
  text-transform: uppercase;
  color: white !important;
  background-color: black !important;
}

.el-button:hover {
  background: white !important;
  color: black !important;
}

.secondaryBtn {
  border: 1px solid #aaaaaa !important;
  color: #aaaaaa !important;
  background-color: white !important;
}

.secondaryBtn:hover {
  color: #aaaaaa !important;
}

[class^="el-icon-"] {
  font-weight: 900 !important;
}

.el-dialog__title {
  font-size: 24px !important;
  font-family: "GilroyEB" !important;
  text-transform: uppercase;
}

.el-carousel__container {
  height: 240px !important;
}

.el-carousel__item {
  background: black;
  color: white;
  text-align: center;
  border-radius: 6px !important;
}

.el-input__inner {
  font-family: "Fira Code";
  color: black !important;
  font-weight: 500 !important;
}

.el-input__inner:focus {
  border-color: black !important;
}

.el-collapse-item__header {
  font-size: 16px !important;
  line-height: 24px !important;
  padding-top: 16px !important;
  padding-bottom: 16px !important;
}

.el-collapse-item__content {
  font-size: 16px !important;
}

@media (min-width: 768) {
}

@media (min-width: 992px) {
  .el-menu-item {
    padding: 0 10px !important;
  }

  .el-carousel__container {
    height: 280px !important;
  }
}

@media (min-width: 1200px) {
  .el-menu-item {
    padding: 0 20px !important;
  }

  .el-dialog--center {
    width: 60% !important;
  }
}
</style>
