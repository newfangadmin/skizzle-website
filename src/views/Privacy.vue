<template>
  <div>
    <Header view="privacy" />
    <el-row class="privacy">
      <el-col :span="20" :offset="2" class="privacyContainer">
        <div class="heading">Privacy Policy</div>
        <div class="subHeading">This privacy policy describes our approach to collection, handling and sharing of information when you interact with our website <a href="/index.html">https://skizzle.email</a>, also referred to as "site" and also our browser extension software and complementary services, also referred to as our "services".</div>

        <div class="privacyTopic">Collection of information</div>
        <div class="privacyText">We only collect personal information that you voluntarily provide us while registering on our sites and with our services. This is mostly information you have made publicly available such as Name, Email and a Display Image. We also collect a password and have some system generated cryptographic material associated with your account.<br/>
          If you choose one of our paid services, we additionally collect some payment related information.<br/>
          Some publicly available information we collect automatically such as IP addresses, browser version, region of access… when you interact with our site and services.
        </div>

        <div class="privacyTopic">Use of information</div>
        <div class="privacyText">
          The personal information we collect is used to:<br/>
          - Protect user data. Passwords and system generated cryptographic material are used to encrypt your personal information and your data(files, interactions…).<br/>
          - Identify users and provide proper access to our services.<br/>
          - To send marketing, targeted advertising and administrative information to users.<br/>
          - For legal or regulatory purposes and to prevent harm.<br/>
          - To improve our service offering. Usage trends help guide our service offerings.<br/>
          - To solicit feedback from users.
        </div>

        <div class="privacyTopic">Sharing of information</div>
        <div class="privacyText">
          Your information and data is sacrosanct to us and we will never unduly share your information and most certainly never rent/sell your information and data.<br/>
          You information is shared with third parties in the following scenarios:<br/>
          - When complying with laws and cooperating with government and law enforcement. Especially in matters of national security.<br/>
          - When we detect or are informed of gross misconduct, conduct of illegal activities, suspected fraud and/or potential to cause harm and are required to investigate the matter.<br/>
          - When we engage third parties to help us process data, improve services, send emails, host services, process payments… we may share information in order for them to function effectively.<br/>
          - When we are required to do so, as part of due process, in business transaction scenarios such as company financing, sale, merger…<br/>
        </div>

        <div class="privacyTopic">Safety of information</div>
        <div class="privacyText">
          Your personal information such as name, email address… are stored on both the extension and our servers. We implement appropriate technical and organisational measures to protect this information.<br/>
          Your cryptographic keys are only stored on the extension on your computer. While at rest, the cryptographic keys are encrypted with the user password to further ensure security.<br/>
          All user files are encrypted, locally before being uploaded. Only encrypted files are ever downloaded and decrypted, again, only locally. The encryption keys used to encrypt the files are further encrypted with user cryptographic keys, when stored locally in the extension or on our servers, to enable file sharing, so that they are never exposed to any service(including us) or to any malicious actors.<br/>
        </div>

        <div class="privacyTopic">Minor's privacy</div>
        <div class="privacyText">
          We do not knowingly collect personal information from minors. You are required to be over 18 years of age to use our services or need to have a non-minor parent or guardian signup to our services in order to use our services, under supervision.
        </div>

        <div class="privacyTopic">Cookies</div>
        <div class="privacyText">
          We use cookies to track certain personal and other information in order to provide optimal user experience. You can block cookie usage by us in your browser but this would affect the levels of our service.
        </div>

        <div class="privacyTopic">Contact Information</div>
        <div class="privacyText">
          If you wish to ask us any further questions or would like to review/remove your accounts and data, please write into us at hello@skizzle.email.
        </div>
      </el-col>
    </el-row>
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
.privacy {
  padding-top: 40%;
  text-align: left;
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

.heading {
  font-size: 24px;
  font-weight: 500;
}

.privacyContainer {
  text-align: center;
  font-weight: 300;
  font-family: "Fira Code", monospace !important;
}

.privacyTopic, .privacyText {
  text-align: left;
}

.privacyTopic {
  margin-top: 30px;
  font-size: 18px;
  text-decoration: underline;
}

.privacyText {
  margin-top: 18px;
  line-height: 1.5rem;
  padding-bottom: 30px;
}

@media (min-width: 768px) {
  .privacy {
    padding-top: 22%;
  }
}

@media (min-width: 992px) {
  .privacy {
    padding-top: 16%;
  }
}

@media (min-width: 1200px) {
  .privacy {
    padding-top: 12%;
  }
}
</style>