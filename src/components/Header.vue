<template>
  <el-row class="header">
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
          <el-menu-item index="1"><a href="#" v-scroll-to="'#mission'" class="menuLink">Mission</a></el-menu-item>
          <el-menu-item index="2"><a href="#" v-scroll-to="'#demo'" class="menuLink">Demo</a></el-menu-item>
          <el-menu-item index="3"><a href="#" v-scroll-to="'#pricing'" class="menuLink">Pricing</a></el-menu-item>
          <el-menu-item index="4"><a href="#" v-scroll-to="'#contact'" class="menuLink">Contact</a></el-menu-item>
          <el-tooltip class="item" effect="dark" content="Explore live transactions on Skizzle's public blockchain explorer ↗" placement="bottom">
            <el-menu-item index="5" class="hidden-md-and-down"><a href="https://explorer.skizzle.email" target="_blank">Explorer</a></el-menu-item>
          </el-tooltip>
        </el-menu>
      </el-col>
      <el-col :xs="{span:2, offset:1}" :sm="{span:2, offset:1}" class="hidden-md-and-up menuBtnContainer">
        <i class="el-icon-menu"></i>
      </el-col>
      <el-col :xs="{span:6, offset:6}" :sm="{span:6, offset:6}" :md="{span:4, offset:0}" class="logoContainer">
        <router-link to="/">
          <img src="../assets/skizzleLogoVertical.svg" height="60" class="logoImage" alt="Skizzle" />
        </router-link>
      </el-col>
      <el-col :xs="{span:8}" :sm="{span:8}" :md="{span:9}" class="downloadBtnContainer">
        <el-button icon="el-icon-download" class="hidden-sm-and-down">Get Skizzle</el-button>
        <el-button icon="el-icon-download" class="hidden-md-and-up">Get</el-button>
      </el-col>
  </el-row>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';

export default {
  name: 'Header',
  props: ["view"],
  data() {
    return {
      email: ""
    };
  },
  methods: {
    async signout() {
      const key = `skizzleContest|${this.email}`;
      const res = await fetch("https://contest-server.skizzle.email/auth/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(key)}`
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
  height: 80px;
  position: fixed;
  width: 100%;
  background: white;
  top: 0;
  z-index: 999;
  border-bottom: 1px dashed #dddddd;
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

@media (min-width: 992px) {
  
}
</style>
