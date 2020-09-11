<template>
  <div>
    <Header view="contestHome" />
    <div class="contestHome">
      <el-row>
        <el-col :span="22" :offset="1" class="sentContainer">
          <div class="tryAgainSub"><span class="greeting">Hey {{this.firstName}},</span><br/>An email with a random keystore file has been sent to <span class="altColor">{{ this.email }}</span><br/><br/>You are currently on:</div>
          <el-card class="attemptCard">
            <div class="attemptHeading">Attempt {{ attempt }}</div>
          </el-card>
        </el-col>
      </el-row>
      <el-row class="whatNextContainer">
        <el-col class="whatNext" :xs="{span:24}" :sm="{span:20, offset:2}" :md="{span:20, offset:2}" :lg="{span:16, offset:4}">
          <div class="whatNextHeading">What next?</div>
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
          <div class="tryAgainHeading">Didn't win on your first attempt?</div>
          <div class="tryAgainSub">Didn't win any tokens or just want to try and get our $100 grand prize? Have another go!</div>
        </el-col>
        <el-col class="tryAgainBtnContainer" :span="24">
          <el-button icon="el-icon-magic-stick" @click="tryAgainInit">Try Again</el-button>
        </el-col>
      </el-row>
    </div>
    <el-dialog
      title="Woot!"
      :visible.sync="mailSentDialogVisible"
      width="80%"
      center>
      <div class="sentDialogContainer">
        <div class="sentHeading">Your random keystore is on it's way to your inbox.</div>
        <img class="goodLuck" src="https://media.giphy.com/media/j1Xyt3DHfJcmk/giphy.gif" />
      </div>
    </el-dialog>

    <el-dialog
      title="Spread the good word!"
      :visible.sync="twitterDialogVisible"
      width="80%"
      center>
      <div class="sentDialogContainer">
        <div class="twitterHeading">To get your extra attempt,</div>
        <el-row>
          <el-col :xs="{span: 24, offset: 0}" :sm="{span: 20, offset: 2}" :lg="{span:14, offset:5}">
            <ul class="emailTodo">
              <li>Download the pdf below. It contains an introduction of what Skizzle is.</li>
              <li>Email it, using Skizzle, to any 3 of your contacts, from the same account as you signed up with.</li>
              <li>cc/bcc <span class="altColor">hello@skizzle.email</span> in the same email.</li>
            </ul>
          </el-col>
        </el-row>
        <el-button class="copyBtn" icon="el-icon-download" @click="downloadPDF">Download pdf</el-button>
        <div class="submitTweetHeading">We will verify your email and send you your second random keystore file.<br/>Again, do not forget to cc/bcc <span class="altColor">hello@skizzle.email</span>.</div>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.contestHome {
  padding-top: 24%;
}

.sentContainer {
  text-align: center;
}

.sentDialogContainer {
  text-align: center;
}

.greeting {
  font-size: 28px;
}

.attemptHeading, .sentHeading, .whatNextHeading, .tryAgainHeading {
  text-align: center;
  font-family: "GilroyEB";
  font-size: 28px;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: black;
  word-break: keep-all;
}

.attemptCard {
  width: 60%;
  margin-left: 20%;
  margin-bottom: 30px;
  margin-top: 20px;
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

.goodLuck {
  width: 90%;
}

.twitterHeading {
  color: black;
  word-break: keep-all;
}

.emailTodo {
  text-align: left;
  color: black;
  word-break: keep-all;
}

.submitTweetHeading {
  margin-top: 30px;
  color: black;
  border-top: 1px dashed #dddddd;
  padding-top: 30px;
  word-break: keep-all;
}

.tweetText {
  width: 80%;
  margin-top: 24px;
  padding: 10px;
  word-break: keep-all;
}

.copyBtn, .submitBtn {
  margin-top: 16px;
}

.tweetLink {
  margin-top: 24px;
}

@media (min-width: 768px) {
  .contestHome {
    padding-top: 14%;
  }

  .attemptCard {
    width: 40%;
    margin-left: 30%;
  }

  .goodLuck {
    width: 70%;
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
  .goodLuck {
    width: 60%;
  }
}

@media (min-width: 992px) {
  .attemptCard {
    width: 20%;
    margin-left: 40%;
  }

  .goodLuck {
    width: 40%;
  }
}
</style>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'ContestHome',
  props: ["email", "firstLogin", "firstName"],
  components: {
    Header
  },
  data() {
    return {
      attempt: 1,
      token: "",
      mailSentDialogVisible: false,
      twitterDialogVisible: false,
      tweetText: "I'm going for gold with the @skizzledotemail contest! Check it out https://skizzle.email/contest It is the most secure way to share files.",
      tweetLink: "",
      url: "https://skizzle-website.netlify.app/img/ChromeWebStore_Badge_v2_340x96.991809bf.png"
    };
  },
  methods: {
    async tryAgainInit() {
      const res = await fetch("https://contest-server.skizzle.email/wallet/new-attempt", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${this.token}`
        }
      });
      if (res.status < 400) {
        res.json().then((result) => {
          console.log(result);
          this.twitterDialogVisible = true;
        }); 
      }
    },

    copyText() {
      document.querySelector("textarea").select();
      document.execCommand('copy');
    },

    downloadPDF() {
      fetch(this.url, {
        method: 'get',
      })
      .then(response => response.blob())
      .then(blob => {
          var url = window.URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = "some.png";
          document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
          a.click();    
          a.remove();  //afterwards we remove the element again         
      })
      .catch(() => console.log('error occured'));
    }
  },
  async mounted() {
    this.$root.$emit('gotEmail', this.email);
    this.token = localStorage.getItem(`skizzleContest|${this.email}`);
    if (!this.token) {
      this.$router.push("/contest");
    }
    if (JSON.parse(this.firstLogin)) {
      this.mailSentDialogVisible = true;
    }
    const res = await fetch("https://contest-server.skizzle.email/wallet/new-attempt/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${this.token}`
      }
    });
    if (res.status < 400) {
      res.json().then((result) => {
        if (result.attempted) {
          this.attempt = 2;
        } else {
          this.attempt = 1;
        }
      }); 
    }
  }
}
</script>