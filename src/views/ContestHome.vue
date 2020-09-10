<template>
  <div>
    <Header view="contestHome" />
    <div class="contestHome">
      <el-row>
        <el-col :span="22" :offset="1" class="sentContainer">
          <el-card class="attemptCard">
            <div class="attemptHeading">Attempt {{ attempt }}</div>
          </el-card>
          <div class="sentHeading">Woot! Your random keystore is on it's way to your inbox.</div>
          <img class="goodLuck" src="https://media.giphy.com/media/j1Xyt3DHfJcmk/giphy.gif" />
        </el-col>
      </el-row>
      <el-row class="whatNextContainer">
        <el-col class="whatNext" :xs="{span:24}" :sm="{span:20, offset:2}" :md="{span:20, offset:2}" :lg="{span:16, offset:4}">
          <div class="whatNextHeading">What next</div>
          <div class="whatNextSub">Your email from us should arrive shortly. Once it does, getting hold of the keystore file is fairly intuitive but here are some videos to help you out:</div>
          <ul class="whatNextList">
            <li class="whatNextItem">Checkout how to install Skizzle in <a href="https://youtube.com" target="_blank">this 14 second video</a>.</li>
            <li class="whatNextItem">Checkout how to create a Skizzle account in <a href="https://youtube.com" target="_blank">this 12 second video</a>.</li>
            <li class="whatNextItem">Checkout how to decrypt and download the encrypted attachment in <a href="https://youtube.com" target="_blank">this 13 second video</a>.</li>
          </ul>
        </el-col>
      </el-row>
      <el-row class="tryAgainContainer">
        <el-col class="tryAgain" :xs="{span:24}" :sm="{span:20, offset:2}" :md="{span:20, offset:2}" :lg="{span:16, offset:4}">
          <div class="tryAgainHeading">Didn't win?</div>
          <div class="tryAgainSub">Didn't win any tokens or just want to try and get our $100 grand prize? Have another go!</div>
        </el-col>
        <el-col class="tryAgainBtnContainer" :span="24">
          <el-button icon="el-icon-magic-stick">Try Again</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contestHome {
  padding-top: 24%;
}

.sentContainer {
  text-align: center;
}

.attemptHeading, .sentHeading, .whatNextHeading, .tryAgainHeading {
  text-align: center;
  font-family: "GilroyEB";
  font-size: 28px;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.attemptCard {
  width: 60%;
  margin-left: 20%;
  margin-bottom: 30px;
}

.attemptHeading {
  color: #ff5b00;
  margin-bottom: 0;
}

.whatNextContainer, .tryAgainContainer {
  margin-top: 54px;
  padding-top: 54px;
  border-top: 1px dashed #dddddd;
  text-align: center;
}

.whatNextList {
  list-style: decimal;
  text-align: left;
}

.whatNextItem {
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;
}

.tryAgainBtnContainer {
  margin-top: 40px;
}

@media (min-width: 768px) {
  .contestHome {
    padding-top: 14%;
  }

  .attemptCard {
    width: 40%;
    margin-left: 30%;
  }
}

@media (min-width: 992px) {
  .contestHome {
    padding-top: 8%;
  }

  .attemptCard {
    width: 30%;
    margin-left: 35%;
  }

  .whatNextItem {
    font-size: 18px;
    line-height: 28px;
  }
}

@media (min-width: 992px) {
  .attemptCard {
    width: 20%;
    margin-left: 40%;
  }
}
</style>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'ContestHome',
  props: ["email"],
  components: {
    Header
  },
  data() {
    return {
      attempt: 1,
    };
  },
  mounted() {
    console.log('1', this.email);
    console.log('2', localStorage.getItem(this.email));
  }
}
</script>