<template>
  <div>
    <Header view="about" />
    <div class="about">
      <el-row class="hero">
        <el-col :span="22" :offset="1" class="sectionHeader">We are a team passionate about data privacy and security</el-col>
        <el-col :xs="{span:22, offset:1}" :sm="{span:20, offset:2}" :md="{span:18, offset:3}" :lg="{span:16, offset:4}" class="sectionSub">
          By creating a suite of deadly easy to use services, apps and SDKs, we want to ensure that every individual, business and institution can safeguard their online data exchange.
        </el-col>
        <el-col class="heroImageContainer">
          <img class="heroImage" src="../assets/team.png">
        </el-col>
      </el-row>
      <el-row class="section">
        <el-col :span="20" :offset="2" class="sectionHeader">
          Data Privacy and Security should be for everyone
        </el-col>
        <el-col :span="16" :offset="4" class="sectionSub">
          For the longest time, "high-end" data security has been available only to large corporations who can afford it. Individuals, small businesses and institutions have been priced out of this market.<br/>
          Jargon filled sales pitches and obscure implementations have been the status quo but it is our mission to make state of the art data security that is privacy preserving the new norm.<br/>
          We intend to do so by being completely transparent, educative and affordable.
        </el-col>
      </el-row>
      <el-row class="section">
        <el-col :span="20" :offset="2" class="sectionHeader">
          Join us
        </el-col>
        <el-col :span="16" :offset="4" class="sectionSub">
          If you like what we doing and would like to contribute, email us <a href="mailto:hello@skizzle.email">hello@skizzle.email</a>.<br/>
          We are always looking to add exceptional people to our team across our sales, design and tech functions.
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  },
  data() {
    return {
      
    };
  },
}
</script>

<style scoped>
.about {
  padding-top: 40%;
  text-align: center;
}

.heroImage {
  width: 60%;
  height: 90%;
  margin-top: 40px;
}

.section {
  margin-top: 6%;
  padding-top: 6%;
  border-top: 1px dashed #dddddd;
}

.sectionHeader {
  font-family: "GilroyEB";
  font-size: 28px;
  text-align: center;
  text-transform: uppercase;
}

.sectionSub {
  margin-top: 20px;
  text-align: center;
}

@media (min-width: 768px) {
  .about {
    padding-top: 22%;
  }
}

@media (min-width: 992px) {
  .about {
    padding-top: 16%;
  }
}

@media (min-width: 1200px) {
  .about {
    padding-top: 12%;
  }
}
</style>