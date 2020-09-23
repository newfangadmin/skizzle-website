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
          <img class="heroImage" src="../assets/team.jpg">
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
        <el-col :span="20" :offset="2" class="sectionSub">
          If you like what we doing and would like to contribute, email us <a href="mailto:hello@skizzle.email">hello@skizzle.email</a>.<br/>
          We are always looking to add exceptional people to our team across our sales, design and tech functions.
        </el-col>
      </el-row>
      <el-row class="section">
        <el-col :span="20" :offset="2" class="sectionHeader">
          Our partners
        </el-col>
        <el-col :span="20" :offset="2" class="sectionSub">
          We've partnered up with industry leaders to deliver the best possible solution.
        </el-col>
        <el-col :span="12" class="partnerContainer">
          <a href="https://matic.network" target="_blank">
            <img class="partnerLogo" src="../assets/matic-logo-dark.svg" />
          </a>
        </el-col>
        <el-col :span="12" class="partnerContainer">
          <a href="https://tor.us" target="_blank">
            <img class="partnerLogo torusLogo" src="../assets/torus-wordmark-blue.svg" />
          </a>
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

.partnerLogo {
  width: 80%;
  padding-top: 30px;
}

.torusLogo {
  width: 50%;
  padding-top: 55px;
}

@media (min-width: 768px) {
  .about {
    padding-top: 22%;
  }

  .torusLogo {
    padding-top: 80px;
  }
}

@media (min-width: 992px) {
  .about {
    padding-top: 16%;
  }

  .torusLogo {
    padding-top: 100px;
  }
}

@media (min-width: 1200px) {
  .about {
    padding-top: 12%;
  }

  .torusLogo {
    padding-top: 120px;
  }
}
</style>