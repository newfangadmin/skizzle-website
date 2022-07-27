<template>
  <div>
    <el-row class="header">
        <el-col class="banner">
          <p class="banner-text">
            The Skizzle service will be terminated on 7th August 2022. Check out <a href="https://arcana.network" target="_blank">Arcana Network</a> for our next adventure.
          </p>
        </el-col>
        <el-col :md="{span:9, offset:1}" class="hidden-sm-and-down menuContainer">
          <div class="contestHeading" v-if="view==='contest'">
            Skizzle Contest
          </div>
          <div class="contestHeading" v-else-if="view==='contestHome'">
            <a class="logoutBtn" href="#" @click="signout">
              <img class="logoutIcon" src="../assets/logout.svg" height="40" />
            </a>
          </div>
          <el-menu class="el-menu-demo" mode="horizontal" v-else>
            <el-menu-item index="1"><a href="/about" class="menuLink">About</a></el-menu-item>
            <el-menu-item index="2"><a href="/faq" class="menuLink">FAQs</a></el-menu-item>
            <el-menu-item index="3"><a href="https://skizzlehq.com/blog" target="_blank" class="menuLink">Blog</a></el-menu-item>
            <el-tooltip class="item" effect="dark" content="Explore live transactions on Skizzle's public blockchain explorer ↗" placement="bottom">
              <el-menu-item index="5" class="hidden-md-and-down"><a href="https://explorer.skizzle.email" target="_blank">Explorer</a></el-menu-item>
            </el-tooltip>
          </el-menu>
        </el-col>
        <el-col :xs="{span:2, offset:1}" :sm="{span:2, offset:1}" class="hidden-md-and-up menuBtnContainer">
          <i class="el-icon-menu" @click="menuDialogVisible = true"></i>
        </el-col>
        <el-col :xs="{span:6, offset:6}" :sm="{span:6, offset:6}" :md="{span:4, offset:0}" class="logoContainer">
          <router-link to="/">
            <img src="../assets/skizzleLogoVertical.svg" height="60" class="logoImage" alt="Skizzle" />
          </router-link>
        </el-col>
        <el-col :xs="{span:8}" :sm="{span:8}" :md="{span:9}" class="downloadBtnContainer">
          <el-button icon="el-icon-download" class="hidden-sm-and-down" @click="navigate('https://chrome.google.com/webstore/detail/skizzle/mjkcepplkockpofgjhbnbjajfljleegm')">Get Skizzle</el-button>
          <el-button icon="el-icon-download" class="hidden-md-and-up" @click="navigate('https://chrome.google.com/webstore/detail/skizzle/mjkcepplkockpofgjhbnbjajfljleegm')">Get</el-button>
        </el-col>
    </el-row>
    <!-- <el-row class="contestContainer" v-if="view!=='contest' && view!=='contestHome'">
      <el-col class="contestText">
        Head over to our <a class="contestLink" href="/contest" target="_blank">Contest</a> page and see how you can win $600 in USDT
      </el-col>
    </el-row> -->
    <el-dialog
      title="Menu"
      :visible.sync="menuDialogVisible"
      width="90%"
      center>
      <ul class="responsiveMenuItems">
        <li class="responsiveMenuItem"><a href="/" class="menuLink">Home</a></li>
        <li class="responsiveMenuItem"><a href="/about" class="menuLink">About</a></li>
        <li class="responsiveMenuItem"><a href="/faq" class="menuLink">FAQs</a></li>
        <li class="responsiveMenuItem"><a href="https://skizzlehq.com/blog" target="_blank" class="menuLink">Blog</a></li>
        <li class="responsiveMenuItem"><a href="https://explorer.skizzle.email" target="_blank">Explorer</a></li>
        <li class="responsiveMenuItem"><a href="/contest" class="menuLink">Contest</a></li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';

export default {
  name: 'Header',
  props: ["view"],
  data() {
    return {
      email: "",
      menuDialogVisible: false,
    };
  },
  methods: {
    navigate(url) {
      window.open(url, "_blank");
    },

    async signout() {
      const key = `skizzleContest|${this.email}`;
      const res = await fetch("https://contest-server.skizzle.email/auth/logout/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem(key)}`
        }
      });
      if (res.status < 400) {
        localStorage.clear();
        this.$router.push({ path: "/contest" });
      }
    }
  },
  mounted() {
    this.$root.$on('gotEmail', (email) => {
      this.email = email;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: fixed;
  width: 100%;
  background: white;
  top: 0;
  z-index: 999;
  border-bottom: 1px dashed #dddddd;
}

.banner {
  background: #ff5b00;
  padding: 0.25rem 1rem;
  color: white;
  text-align: center;
}

.banner-text {
  font-family: "GilroyEB";
  line-height: 1.5;
}
.banner-text a {
  color: white;
  transition: opacity 0.4s ease-in;
  opacity: 1;
  text-underline-offset: 0.1em;
}
.banner-text a:hover, .banner-text a:focus {
  opacity: 0.8;
  transition: opacity 0.4s ease-in;
}

.logoutIcon {
  padding-top: 20px;
}

.logoContainer {
  height: 100%;
  text-align: center;
}

.logoImage {
  padding-top: 12px;
}

.contestContainer {
  position: fixed;
  top: 80px;
  text-align: center;
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  z-index: 10;
}

.contestHeading {
  line-height: 80px;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
}

.associationText {
  font-size: 9px;
  font-weight: 300;
  text-transform: none;
}

.el-menu.el-menu--horizontal {
  border: none !important;
  height: 78px;
}

.el-menu--horizontal > .el-menu-item {
  height: 80px;
  line-height: 80px;
}

.el-menu-item {
  font-family: "GilroyB";
  color: black !important;
  font-size: 16px !important;
  text-transform: uppercase;
  float: none !important;
  display: inline;
}

.el-menu-item:hover {
  color: #ff5b00 !important;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none !important;
}

.menuLink {
  text-decoration: none;
}

.downloadBtnContainer {
  padding-top: 18px;
  text-align: right;
}

.menuBtnContainer {
  padding-top: 24px;
  text-align: left;
}

.el-icon-menu {
  font-size: 30px;
}

.responsiveMenuItems {
  list-style: none;
  text-align: center;
  padding: 0;
}

.responsiveMenuItem {
  padding: 10px;
  font-family: "GilroyB";
  color: black !important;
  font-size: 16px !important;
  text-transform: uppercase;
}

@media (min-width: 992px) {
  
}
</style>
