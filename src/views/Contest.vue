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
        <el-col :span="22" :offset="1" class="signupHeading">Signup with your Gmail to continue</el-col>
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:500);

.contest {
  padding-top: 24%;
}

.countdownHeading, .signupHeading {
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
  margin-top: 6%;
  padding-top: 6%;
  border-top: 1px dashed #dddddd;
}

.google-btn {
  width: 80%;
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
      time: (new Date('September 9, 2020 23:59:59 GMT') - new Date()),
      isSignIn: false,
    };
  },

  methods: {
    async signin() {
      const googleUser = await this.$gAuth.signIn();
      const id = googleUser.getId();
      const profile = googleUser.getBasicProfile();
      const res = googleUser.getAuthResponse();
      console.log(id, profile, res);
      this.isSignIn = this.$gAuth.isAuthorized
      console.log('auth?', this.$gAuth.isAuthorized)
    }
  },

  mounted() {
    
  }
}
</script>