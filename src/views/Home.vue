<template>
  <div>
  <Header />
  <div class="home">
    <el-row class="hero">
      <el-col :xs="{span:24}" :sm="{span:18, offset:3}" class="headerTextContainer">
        <el-row class="heroMainContainer">
          The most <span class="altColor">secure</span> way to share files.
        </el-row>
        <el-row class="heroSubContainer">
          Skizzle is, currently, a <span class="altColor">chrome extension</span> that allows you to send/receive end-to-end encrypted attachments right in your Gmail.
        </el-row>
        <el-row class="chromeWebstoreBtnContainer">
          <a href="https://chrome.google.com/webstore/detail/skizzle/mjkcepplkockpofgjhbnbjajfljleegm" target="_blank">
            <img class="chromeWebstoreBtn" src="../assets/ChromeWebStore_Badge_v2_340x96.png">
          </a>
        </el-row>
        <el-row class="productHunt">
          <el-col class="phFeatured" :xs="{span:24}" :sm="{span:12}">
            <a href="https://www.producthunt.com/posts/skizzle?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-skizzle" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=286855&theme=light" alt="Skizzle - End-to-end encrypted attachments in Gmail | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
          </el-col>
          <el-col class="phReview" :xs="{span:24}" :sm="{span:12}">
            <a href="https://www.producthunt.com/posts/skizzle?utm_source=badge-review&utm_medium=badge&utm_souce=badge-skizzle#discussion-body" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/review.svg?post_id=286855&theme=light" alt="Skizzle - End-to-end encrypted attachments in Gmail | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="section democratize" id="mission">
      <el-col :span="20" :offset="2" class="sectionHeader">
        We are on a mission to democratize the security and privacy of your data.
      </el-col>
      <el-col :span="20" :offset="2" class="sectionSub">
        Built on the principles of <a href="https://en.wikipedia.org/wiki/Privacy_by_design" target="_blank">Privacy by Design</a>, Skizzle aims to deliver a solution set that  is:
      </el-col>
      <el-col :span="24" class="featuresContainer">
        <el-row>
          <el-col :xs="{span:20, offset:2}" :sm="{span:12, offset:0}" :md="{span:6, offset:0}" class="feature">
            <i class="el-icon-bicycle featureIcon" />
            <div class="featureHeading">Simple</div>
            <div class="featureText">Anyone can setup in minutes and usage is straightforward.</div>
          </el-col>
          <el-col :xs="{span:20, offset:2}"  :sm="{span:12, offset:0}" :md="{span:6, offset:0}" class="feature">
            <i class="el-icon-lock featureIcon" />
            <div class="featureHeading">Secure</div>
            <div class="featureText">Encryption, Storage and Sharing that is immune to hacks, snooping or mining.</div>
          </el-col>
          <el-col :xs="{span:20, offset:2}" :sm="{span:12, offset:0}" :md="{span:6, offset:0}" class="feature">
            <i class="el-icon-view featureIcon" />
            <div class="featureHeading">Transparent</div>
            <div class="featureText">Know how your data is handled and independently verify who has access to your files.</div>
          </el-col>
          <el-col :xs="{span:20, offset:2}" :sm="{span:12, offset:0}" :md="{span:6, offset:0}" class="feature">
            <i class="el-icon-ice-cream-square featureIcon" />
            <div class="featureHeading">Affordable</div>
            <div class="featureText">State-of-the-art security without burning a hole in your pocket.</div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="section simple" id="demo">
      <el-col :span="20" :offset="2" class="sectionHeader">
        Skizzle is deadly easy to use. Just do the things you already do.
      </el-col>
      <el-col :span="20" :offset="2" class="sectionSub">
        Forget about encrypting in one app, uploading to another and sharing with a third. Simply Compose -> Attach -> Send on Gmail.
      </el-col>
      <el-col :span="20" :offset="2" class="demoVideoContainer">
        <iframe class="demoVideo" src="https://www.youtube.com/embed/smCAxZOE9iQ" allowfullscreen></iframe>
      </el-col>
    </el-row>

    <el-row class="section secure">
      <el-col :span="20" :offset="2" class="sectionHeader">
        Skizzle is privacy preserving and secure by design. No compromises.
      </el-col>
      <el-col :span="20" :offset="2" class="sectionSub">
        Share files that only you and the intended recipients can access. Not even Gmail. Not even us!
      </el-col>
      <el-col :span="20" :offset="2" class="featuresContainer">
        <el-carousel trigger="click" type="card" :autoplay="false">
          <el-carousel-item>
            <img class="featuresIcon hidden-sm-and-down" src="../assets/encryption.svg" />
            <h3 class="medium">Local Encryption</h3>
            <ul class="featurePoints">
              <li>AES encryption of files before upload.</li>
              <li>Local storage of encryption keys.</li>
              <li>No need to create/share/manage passwords.</li>
            </ul>
          </el-carousel-item>
          <el-carousel-item>
            <img class="featuresIcon hidden-sm-and-down" src="../assets/storage.svg" />
            <h3 class="medium">Secure Storage</h3>
            <ul class="featurePoints">
              <li>Only encrypted files are stored on Skizzle servers.</li>
              <li>Each Skizzle server stores a piece of an encrypted file.</li>
              <li>Servers have zero knowledge of what they store.</li>
            </ul>
          </el-carousel-item>
          <el-carousel-item>
            <img class="featuresIcon hidden-sm-and-down" src="../assets/access.svg" />
            <h3 class="medium">Private Access</h3>
            <ul class="featurePoints">
              <li>Only file owner/sender can decide who gets to access a file.</li>
              <li>User authenticated on blockchain before being able to download encrypted file.</li>
              <li>Key to decrypt the file only available to authorised recipients.</li>
            </ul>
          </el-carousel-item>
          <el-carousel-item>
            <img class="featuresIcon hidden-sm-and-down" src="../assets/verify.svg" />
            <h3 class="medium">Public Verifiability</h3>
            <ul class="featurePoints">
              <li>Check who has access to any of your files on a public blockchain.</li>
              <li>Verify your account usage.</li>
              <li>Only pseudonymous identifiers used to preserve privacy.</li>
            </ul>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="20" :offset="2" class="whitepaperContainer">
        Read our <a href="Skizzle-Whitepaper.pdf" target="_blank">technical whitepaper</a>
      </el-col>
    </el-row>

    <el-row class="section transparent">
      <el-col :span="20" :offset="2" class="sectionHeader">
        Backed by a public blockchain, Skizzle provides unprecedent transparency and trust.
      </el-col>
      <el-col :span="20" :offset="2" class="sectionSub">
        Every action you perform is written to the <a href="https://matic.network" target="_blank">Matic Blockchain</a>. Publicly verify your usage and who has access to your files, anytime.
      </el-col>
      <el-col :span="24" class="featuresContainer">
        <el-row>
          <el-col :xs="{span:20, offset:2}" :sm="{span:8, offset:0}" :md="{span:8, offset:0}" class="feature">
            <img src="../assets/skizzle.svg" height="64px" class="featureLogo" />
            <div class="featureHeading">Verify your usage on our Public Explorer</div>
            <div class="featureBtnContainer">
              <a href="https://explorer.skizzle.email" target="_blank">Checkout our Explorer</a>
            </div>
          </el-col>
          <el-col :xs="{span:20, offset:2}"  :sm="{span:8, offset:0}" :md="{span:8, offset:0}" class="feature">
            <img src="../assets/maticLogo.svg" height="64px" class="featureLogo" />
            <div class="featureHeading">Confirm actions on the Matic Blockchain</div>
            <div class="featureBtnContainer">
              <a href="https://explorer.matic.network/address/0x6FAfC2061C3DD825B07aDBc876F894c77755d8E9/transactions" target="_blank">Checkout Matic Network</a>
            </div>
          </el-col>
          <el-col :xs="{span:20, offset:2}" :sm="{span:8, offset:0}" :md="{span:8, offset:0}" class="feature">
            <img src="../assets/GitHub-Mark-120px-plus.png" height="64px" class="featureLogo" />
            <div class="featureHeading">Checkout our smart contracts on Github</div>
            <div class="featureBtnContainer">
              <a href="https://github.com/newfangadmin/skizzle_smart_contracts" target="_blank">Checkout our Github</a>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row class="section pricing" id="pricing">
      <el-col :span="20" :offset="2" class="sectionHeader">
        Big or small, individuals, businesses and institutions of all sizes deserve to be able to protect their data.
      </el-col>
      <el-col :span="20" :offset="2" class="sectionSub">
        With Skizzle, you don't pay less and get lowered security. All our plans come with the same state-of-the-art encryption schemes and privacy control.
      </el-col>
      <el-col :span="24" class="featuresContainer">
        <el-row>
          <el-col :xs="{span:20, offset:2}" :sm="{span:20, offset:2}" :md="{span:12, offset:6}" :lg="{span:8, offset:0}" class="feature">
            <el-card shadow="always">
              <div class="planPrice">$0</div>
              <div class="planName">FREE</div>
              <ul class="planFeatures">
                <li class="planFeature"><i class="el-icon-finished planFeatureIcon" />1GB Storage</li>
                <li class="planFeature"><i class="el-icon-finished planFeatureIcon" />50 Actions</li>
                <li class="planFeature"><i class="el-icon-finished planFeatureIcon" />100MB max file size</li>
                <li class="planFeature"><i class="el-icon-finished planFeatureIcon" />Unlimited Bandwidth</li>
              </ul>
              <el-button icon="el-icon-download" @click="navigate('https://chrome.google.com/webstore/detail/skizzle/mjkcepplkockpofgjhbnbjajfljleegm')">Get Skizzle</el-button>
            </el-card>
          </el-col>
          <el-col :xs="{span:20, offset:2}"  :sm="{span:20, offset:2}" :md="{span:12, offset:6}" :lg="{span:8, offset:0}" class="feature">
            <el-card shadow="always">
              <div class="planPrice">$xxx</div>
              <div class="planName">PRO</div>
              <ul class="planFeatures">
                <li class="planFeature"><i class="el-icon-finished planFeatureIcon" />xxxGB Storage</li>
                <li class="planFeature"><i class="el-icon-finished planFeatureIcon" />xxx Actions</li>
                <li class="planFeature"><i class="el-icon-finished planFeatureIcon" />xxxMB max file size</li>
                <li class="planFeature"><i class="el-icon-finished planFeatureIcon" />...and so much more</li>
              </ul>
              <el-button class="secondaryBtn" disabled>Coming Soon</el-button>
            </el-card>
          </el-col>
          <el-col :xs="{span:20, offset:2}" :sm="{span:20, offset:2}" :md="{span:12, offset:6}" :lg="{span:8, offset:0}" class="feature">
            <el-card shadow="always">
              <div class="planPrice">$xxx</div>
              <div class="planName">TEAM</div>
              <ul class="planFeatures">
                <li class="planFeature"><i class="el-icon-finished planFeatureIcon" />xxxGB Storage</li>
                <li class="planFeature"><i class="el-icon-finished planFeatureIcon" />xxx Actions</li>
                <li class="planFeature"><i class="el-icon-finished planFeatureIcon" />xxxMB max file size</li>
                <li class="planFeature"><i class="el-icon-finished planFeatureIcon" />...and so much more</li>
              </ul>
              <el-button class="secondaryBtn" disabled>Coming Soon</el-button>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row class="section contact" id="contact">
      <el-col :span="20" :offset="2" class="sectionHeader">
        Stay up to date with what we are upto
      </el-col>
      <el-col :span="20" :offset="2" class="sectionSub">
        Signup below if you would like early access to our paid plans and be updated with what we are doing right now, next month, a year down the line...
      </el-col>
      <el-col :span="24" class="featuresContainer">
        <el-row>
          <el-col :span="16" :offset="4" class="signupContainer">
            <div class="signupError" v-if="signupError">Invalid email id. Please try again.</div>
            <div class="signupSuccess" v-if="signupSuccess">Signup successful!</div>
            <el-input placeholder="Enter email address" v-model="email" clearable class="signupEmail"></el-input>
            <el-button class="signupBtn" icon="el-icon-user" @click="signUp">Sign up</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row class="footer">
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
      email: "",
      signupError: false,
      signupSuccess: false
    };
  },
  methods: {
    validateEmail(){
      var reg = /^(?:[\w!#$%&'*+\-/=?^`{|}~]+\.)*[\w!#$%&'*+\-/=?^`{|}~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

      if (reg.test(this.email) == false) {
        return false;
      }

      return true;
    },

    async signUp() {
      await this.$recaptchaLoaded();
  
      const token = await this.$recaptcha('signup');
      if (this.validateEmail()) {
        const res = await fetch("https://api.skizzle.email/api/newsletter/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: this.email,
            token
          })
        });
        if (res.status < 400) {
          this.signupSuccess = true;
          this.email = "";
          setTimeout(() => {
            this.signupSuccess = false;
          }, 3000);
        }
      } else {
        this.signupError = true;
        setTimeout(() => {
          this.signupError = false;
        }, 3000)
      }
    },

    navigate(url) {
      window.open(url, "_blank");
    },
  }
}
</script>

<style scoped>
.home {
  padding-top: 20%;
}

.heroMainContainer {
  font-family: "GilroyEB";
  font-size: 52px;
  line-height: 56px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 24%;
}

.heroSubContainer {
  margin-top: 16%;
  font-size: 16px;
  text-align: center;
  width: 96%;
  margin-left: 2%;
}

.chromeWebstoreBtnContainer {
  margin-top: 16%;
  text-align: center;
}

.productHunt {
  text-align: center;
  margin-top: 4%;
  margin-bottom: 4%;
}

.phFeatured, .phReview {
  text-align: center;
}

.chromeWebstoreBtn {
  border: 1px solid #dddddd;
  border-radius: 6px;
  height: 72px;
}

.section {
  margin-top: 10%;
  padding-top: 10%;
  border-top: 1px dashed #dddddd;
}

.sectionHeader {
  font-family: "GilroyEB";
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
}

.sectionSub {
  margin-top: 20px;
  text-align: center;
}

.featuresContainer {
  margin-top: 6%;
}

.feature {
  text-align: center;
  padding: 30px;
}

.featureIcon {
  height: 60px;
  padding: 24px;
  font-size: 60px;
}

.featureHeading {
  font-family: "GilroyB";
  font-size: 24px;
  margin-top: 10px;
}

.featureText {
  margin-top: 10px;
}

.demoVideoContainer {
  height: 300px;
  text-align: center;
  margin-top: 40px;
}

.demoVideo {
  height: 90%;
  width: 90%;
  border: 1px dashed #dddddd;
  border-radius: 12px; 
  margin-top: 3%;
}

.featurePoints {
  text-align: left;
  padding-left: 20px;
  padding-right: 6px;
  font-size: 10px;
}

.whitepaperContainer {
  text-align: center;
  /* font-size: 24px; */
  margin-top: 30px;
  font-weight: 700;
}

.featureLogo {
  padding: 30px;
}

.featureBtnContainer {
  margin-top: 30px;
}

.featureBtn {
  border: 1px solid black;
  background: white;
  color: black;
  font-family: "GilroyEB";
  text-transform: uppercase;
  padding: 20px;
  border-radius: 6px;
  text-decoration: none;
}

.featureBtn:hover {
  background: black;
  color: white;
}

.planPrice {
  font-family: "GilroyEB";
  font-size: 60px;
  color: #ff5b00;
  margin-top: 10px;
}

.planName {
  margin-top: 20px;
  font-family: "GilroyEB";
  font-size: 40px;
}

.planFeatures {
  list-style: none;
  text-align: left;
  padding-left: 10px;
}

.planFeature {
  line-height: 40px;
}

.planFeatureIcon {
  padding-right: 20px;
  color: #ff5b00;
}

.signupContainer {
  text-align: center;
}

.signupError {
  color: red;
  margin-bottom: 20px;
}

.signupSuccess {
  color: green;
  margin-bottom: 20px;
}

.signupEmail {
  font-family: "Fira Code" !important;
}

.signupBtn {
  margin-top: 20px;
}

@media (min-width: 768px) {
  .home {
    padding-top: 14%;
  }

  .heroMainContainer {
    margin-top: 10%;
  }

  .heroSubContainer {
    margin-top: 4%;
  }

  .chromeWebstoreBtnContainer {
    margin-top: 4%;
  }

  .productHunt {
    text-align: center;
    margin-top: 4%;
    margin-bottom: 4%;
  }

  .section {
    margin-top: 6%;
    padding-top: 6%;
  }

  .featurePoints {
    padding-left: 40px;
    padding-right: 20px;
    font-size: 14px;
  }
}

@media (min-width: 992px) {
  .home {
    width: 80%;
    margin-left: 10%;
  }

  .heroMainContainer {
    margin-top: 10%;
  }

  .heroSubContainer {
    width: 100%;
    margin-left: 0;
    margin-top: 16px;
  }

  .chromeWebstoreBtnContainer {
    margin-top: 16px;
  }

  .productHunt {
    text-align: center;
    margin-top: 4%;
    margin-bottom: 4%;
  }

  .sectionHeader {
    font-size: 36px;
  }

  .demoVideoContainer {
    height: 500px;
  }

  .featuresIcon {
    color: white;
    height: 36px;
    padding-top: 18px;
  }
}

@media (min-width: 1200px) {
  .heroMainContainer {
    font-size: 72px;
    line-height: 76px;
    margin-top: 1%;
  }

  .heroSubContainer {
    width: 60%;
    margin-left: 20%;
  }

  .featuresIcon {
    height: 54px;
    padding-top: 28px;
  }

  .featurePoints {
    padding-left: 80px;
    padding-right: 40px;
  }
}
</style>
