<template>
  <div>
    <Header view="contest" />
    <div class="contest">
      <el-row class="countdownContainer">
        <el-col :xs="{span:24, offset:0}" class="countdownHeading">Contest ends in:</el-col>
        <countdown :time="time">
          <template slot-scope="props">
            <el-col :span="6" class="countdownSlot">
              <div class="countdown">{{ props.days }}
                <div class="label">DAYS</div>
              </div>
            </el-col>
            <el-col :span="6" class="countdownSlot">
              <div class="countdown">{{ props.hours }}
                <div class="label">HOURS</div>
              </div>
            </el-col>
            <el-col :span="6" class="countdownSlot">
              <div class="countdown">{{ props.minutes }}
                <div class="label">MINUTES</div>
              </div>
            </el-col>
            <el-col :span="6" class="countdownSlot">
              <div class="countdown">{{ props.seconds }}
                <div class="label">SECONDS</div>
              </div>
            </el-col>
          </template>
        </countdown>
      </el-row>
      <el-row class="signupContainer">
        <el-col :span="22" :offset="1" class="signupHeading">Register to the contest with your Gmail</el-col>
        <el-col :xs="{span:14, offset:5}" :sm="{span:8, offset:8}" :md="{span:6, offset:9}" :lg="{span:4, offset:10}" class="signup">
          <div class="google-btn" @click="signin">
            <div class="google-icon-wrapper">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p class="btn-text"><b>Sign in with Google</b></p>
          </div>
        </el-col>
        <el-col :span="24" class="terms">
          By signing up you accept the contest's <a href="/contestTerms" target="_blank">Terms & Conditions</a>
        </el-col>
      </el-row>
      <el-row class="howContainer">
        <el-col :span="22" :offset="1" class="signupHeading">How it works</el-col>
        <el-col :xs="{span:24}" :md="{span:20, offset:2}" :lg="{span:16, offset:4}" class="howListContainer">
          <ul class="howList">
            <!-- <li class="howItem">Follow us on twitter <a href="https://twitter.com/skizzledotemail" target="_blank">@skizzledotemail</a>.</li>
            <li class="howItem">Like/Retweet our pinned post <a href="https://twitter.com/skizzledotemail" target="_blank">here</a>.</li> -->
            <li class="howItem">Signup above with your Gmail account.</li>
            <li class="howItem">You will then receive an email from hello@skizzle.email with an encrypted attachment.</li>
            <li class="howItem">Install the Skizzle chrome extension and use it to decrypt the attachment.</li>
            <li class="howItem">The attachment is actually a keystore file to a random wallet.</li>
            <li class="howItem">Use the keystore file to access the wallet and check if you it has any USDT(erc20).</li>
            <li class="howItem">If you find any USDT(erc20), VOILA!, you have won. Immediately transfer the tokens to any of your other wallets.</li>
          </ul>
        </el-col>
      </el-row>
      <el-row class="prizeContainer">
        <el-col :span="22" :offset="1" class="signupHeading">$400 worth USDT prize pool</el-col>
        <el-col :span="22" :offset="1" class="prizesContainer">
          <el-row>
            <el-col :xs="{span:20, offset:2}" :sm="{span:12, offset:6}" :md="{span:12, offset:0}" :lg="{span:6, offset:0}">
              <div class="prize">
                <div class="prizeAmount">100<br/><span class="currency">USDT</span></div>
                <div class="prizeText"><span class="keystores">1 keystore file</span><br/>unlocks a wallet with 100 USDT</div>
              </div>
            </el-col>
            <el-col :xs="{span:20, offset:2}" :sm="{span:12, offset:6}" :md="{span:12, offset:0}" :lg="{span:6, offset:0}">
              <div class="prize">
                <div class="prizeAmount">50<br/><span class="currency">USDT</span></div>
                <div class="prizeText"><span class="keystores">2 keystore files</span><br/>unlock wallets with 50 USDT each</div>
              </div>
            </el-col>
            <el-col :xs="{span:20, offset:2}" :sm="{span:12, offset:6}" :md="{span:12, offset:0}" :lg="{span:6, offset:0}">
              <div class="prize">
                <div class="prizeAmount">10<br/><span class="currency">USDT</span></div>
                <div class="prizeText"><span class="keystores">10 keystore files</span><br/>unlock wallets with 10 USDT each</div>
              </div>
            </el-col>
            <el-col :xs="{span:20, offset:2}" :sm="{span:12, offset:6}" :md="{span:12, offset:0}" :lg="{span:6, offset:0}">
              <div class="prize">
                <div class="prizeAmount">5<br/><span class="currency">USDT</span></div>
                <div class="prizeText"><span class="keystores">20 keystore files</span><br/>unlock wallets with 5 USDT each</div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:500);

.contest {
  padding-top: 24%;
}

.countdownHeading {
  text-align: center;
  margin-bottom: 16px;
}

.signupHeading {
  text-align: center;
  font-family: "GilroyEB";
  font-size: 28px;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.countdownSlot {
  padding: 0 10px 0 10px;
}

.countdown {
  font-family: "GilroyEB";
  height: 90px;
  background-color: white;
  color: black;
  text-align: center;
  border: 1px dashed #dddddd;
  border-radius: 6px;
  line-height: 72px;
  font-size: 42px;
  font-weight: 300;
}

.label {
  font-family: "Fira Code";
  font-weight: 300;
  font-size: 12px;
  line-height: 0;
}

.signupContainer {
  margin-top: 30px;
}

.google-btn {
  width: 192px;
  height: 42px;
  margin-left: 10%;
  background-color: #4285f4;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  .google-icon-wrapper {
    position: absolute;
    margin-top: 1px;
    margin-left: 1px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: white;
    text-align: center;
  }
  .google-icon {
    position: relative;
    margin-top: 11px;
    width: 18px;
    height: 18px;
  }
  .btn-text {
    float: right;
    margin: 12px 11px 0 0;
    color: white;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: "Roboto";
  }
  &:hover {
    box-shadow: 0 0 6px #4285f4;
  }
  &:active {
    background: #1669f2;
  }
}

.terms {
  margin-top: 20px;
  text-align: center;
  font-weight: 300;
  font-size: 11px;
}

.howContainer, .prizeContainer {
  margin-top: 54px;
  padding-top: 54px;
  border-top: 1px dashed #dddddd;
}

.howList {
  list-style: decimal;
}

.howItem {
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;
}

.prize {
  text-align: center;
}

.prizeAmount {
  background-color: black;
  border-radius: 6px;
  color: white;
  width: 50%;
  margin-left: 25%;
  padding: 30px 0 30px 0;
  font-family: "GilroyEB";
  font-size: 40px;
}

.currency {
  font-family: "Fira Code";
  font-size: 24px;
}

.prizeText {
  margin-top: 20px;
  width: 70%;
  margin-left: 15%;
  margin-bottom: 40px;
}

.keystores {
  color: #ff5b00;
}

@media (min-width: 768px) {
  .contest {
    padding-top: 14%;
  }

  .countdownSlot {
    padding: 0 24px 0 24px;
  }

  .countdown {
    height: 120px;
    line-height: 90px;
    font-size: 48px;
  }
}

@media (min-width: 992px) {
  .contest {
    padding-top: 10%;
  }

  .countdownSlot {
    padding: 0 32px 0 32px;
  }

  .howItem {
    font-size: 18px;
    line-height: 28px;
  }
}

@media (min-width: 1200px) {
  .contest {
    padding-top: 8%;
  }

  .countdownContainer {
    width: 70%;
    margin-left: 15%;
  }

  .countdownSlot {
    padding: 0 60px 0 60px;
  }
}
</style>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Contest',
  components: {
    Header
  },
  data() {
    return {
      time: (new Date('September 12, 2020 23:59:59 GMT') - new Date()),
      isSignIn: false,
    };
  },

  methods: {
    async signin() {
      // const googleUser = await this.$gAuth.signIn();
      // const authCode = await this.$gAuth.getAuthCode()
      // const id = googleUser.getId();
      // const profile = googleUser.getBasicProfile();
      // const res = googleUser.getAuthResponse();
      // console.log('authCode:', authCode);
      // console.log('id:', id);
      // console.log('profile:', profile);
      // console.log('authRes:', res);
      // this.isSignIn = this.$gAuth.isAuthorized
      // if (this.isSignIn) {
      //   this.$router.push({ path: "/contestHome" });
      // }
      const res = await fetch("https://contest-server.skizzle.email/auth/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (res.status < 400) {
        res.json().then((result) => {
          window.location.replace(result.code_url);
        })
      }
    }
  },

  mounted() {
    
  }
}
</script>