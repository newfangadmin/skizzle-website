<template>
  <el-row class="footer">
    <el-col :span="6" :offset="9" class="logoContainer">
      <router-link to="/">
        <img src="../assets/skizzleLogoVerticalW.svg" height="60" class="logoImage" alt="Skizzle" />
      </router-link>
    </el-col>
    <el-col :span="20" :offset="2" class="footerMenuContainer">
      <ul class="footerMenu">
        <li class="footerMenuItem"><a href="/about">ABOUT</a></li>
        <li class="footerMenuItem"><a href="/about">EXPLORER</a></li>
        <li class="footerMenuItem"><a href="/about">BLOG</a></li>
      </ul>
    </el-col>
    <el-col :span="24" class="footerSocialContainer">
      <el-row>
        <el-col :xs="{span:8, offset:0}" :sm="{span:8, offset:0}" :md="{span:4, offset:6}" class="footerSocialItem">
          <a href="https://twitter.com/skizzledotemail" target="_blank"><img class="footerSocialIcon" src="../assets/twitter-5.svg" /></a>
        </el-col>
        <el-col :xs="{span:8, offset:0}" :sm="{span:8, offset:0}" :md="{span:4, offset:0}" class="footerSocialItem">
          <a href="https://www.facebook.com/SkizzleOfficial" target="_blank"><img class="footerSocialIcon" src="../assets/facebook-5.svg" /></a>
        </el-col>
        <el-col :xs="{span:8, offset:0}" :sm="{span:8, offset:0}" :md="{span:4, offset:0}" class="footerSocialItem">
          <a href="https://t.me/newfang" target="_blank"><img class="footerSocialIcon" src="../assets/telegram-5.svg" /></a>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24" class="contactContainer">
      hello@skizzle.email
    </el-col>
    <el-col :span="24" class="privacyContainer">
      <a class="privacyLink" href="/privacy" target="_blank">Privacy Policy</a>
    </el-col>
    <el-col :span="24" class="copyrightContainer">
      &copy;Copyright <a class="copyrightLink" href="https://newfang.io" target="_blank">Newfang Networks</a> 2020
    </el-col>
  </el-row>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';

export default {
  name: 'Footer',
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  background: black;
  margin-top: 60px;
  padding: 10px;
}

.logoContainer {
  text-align: center;
  margin-top: 20px;
}

.footerMenuContainer {
  color: white;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 16px;
}

.footerMenu {
  list-style: none;
  padding: 0;
}

.footerMenuItem {
  padding: 6px;
  display: inline;
  padding-left: 20px;
  padding-right: 20px;
}

.footerMenuItem a {
  color: white !important;
  font-family: "GilroyEB";
}

.footerSocialItem {
  text-align: center;
}

.footerSocialIcon {
  height: 36px;
}

.contactContainer {
  color: white;
  text-align: center;
  margin-top: 30px;
}

.copyrightContainer {
  text-align: center;
  color: #aaaaaa;
  margin-top: 10px;
  font-size: 11px;
  margin-bottom: 20px;
}

.privacyContainer {
  text-align: center;
  margin-top: 10px;
}

.privacyLink {
  color: #aaaaaa;
  font-size: 12px;
}

@media (min-width: 992px) {
  
}
</style>
