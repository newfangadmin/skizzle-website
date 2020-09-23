<template>
  <div>
    <Header view="faq" />
    <el-row class="faq">
      <el-col class="faqSub">
        If you have any other questions, use the chat window on this page or<br/>write into us <a href="mailto:hello@skizzle.email">hello@skizzle.email</a>.
      </el-col>
      <el-col :span="20" :offset="2">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="1. What is end to end encryption?" name="1">
            <div>It is a system which allows a sender to encrypt a message which can only be accessed by intended recipients. No third party has any means to decrypt the message.</div>
            <div>Skizzle accomplishes end to end encryption of attachments by encrypting the file, locally, on the sender’s browser, storing the encrypted file on our servers, allowing only intended recipients to download the encrypted file and secretly sharing the encryption key with the intended recipients so they can decrypt it.</div>
          </el-collapse-item>
          <el-collapse-item title="2. Why should I trust Skizzle with my data?" name="2">
            <div>We are a startup and unlike big brands, who you currently entrust to store/share your data, we do not carry much in the way of social proof of keeping your data safe and ensuring privacy. We overcome this, in a way, by removing trust from the equation and we do so by making our implementation transparent and publicly verifiable.</div>
            <div>Whether it is writing every user action to a public blockchain or making large parts of our code base open source or using proven cryptographic techniques. Everything we do is so you do not ever need to place trust in us as a brand or in some legalese that is useful only post-facto(after a loss/breach). You can always verify.</div>
          </el-collapse-item>
          <el-collapse-item title="3. Skizzle asks for access to Gmail, why should I allow this?" name="3">
            <div>Skizzle requests for this access to modify the gmail UI and enable the features to:
              <ul>
                <li>Add a security toggle in compose window</li>
                <li>Handle the attach button clicks to encrypt your file</li>
                <li>Check for skizzle encrypted files in incoming emails and decrypt them</li>
              </ul>
            </div>
            <div>We do not read, store, or share any contents of your emails</div>
          </el-collapse-item>
          <el-collapse-item title="4. Does Skizzle have a free plan?" name="4">
            <div>Skizzle comes with a free forever plan with 1GB of file storage and 50 actions per month. All users are placed into our free plan on signup from where they can then upgrade to premium paid plans. You do not need to share your credit card details for the free plan.</div>
          </el-collapse-item>
          <el-collapse-item title="5. How do I upgrade or purchase a paid plan?" name="5">
            <div>Paid plans with increased storage, actions, and other features are launching soon. Once launched, you will be able to purchase the plan through Skizzle extension with your debit or credit card through Stripe. Get in touch with us if you’d like to share your requirements or know more.</div>
          </el-collapse-item>
          <el-collapse-item title="6. What are actions and how are they calculated?" name="6">
            <div>Every upload and download of a file is considered as an action. Every plan comes with a certain number of actions/month which get consumed when you upload a file(1 file upload = 1 action) or someone downloads a file you shared with them(1 file download = 1 action).</div>
            <div>If you run out of actions, you can no longer upload a file to share with someone and recipients of your files can no longer download them. Actions in your plan reset to the prescribed limit at the beginning of every month.</div>
          </el-collapse-item>
          <el-collapse-item title="7. Does downloading files I uploaded count as an action?" name="7">
            <div>No. You can download your own files from you Skizzle account anytime</div>
          </el-collapse-item>
          <el-collapse-item title="8. Is there a limit to the file size that I can attach" name="8">
            <div>The free plan comes with 100MB of file size limit. Paid plans come with increased limits which will be announced on launch of paid plans.</div>
          </el-collapse-item>
          <el-collapse-item title="9. Does the receiver need to be an existing skizzle user?" name="9">
            <div>The receiver doesn’t have to be an existing Skizzle user. You just need their email to share an encrypted file with them. However, they will need to install Skizzle before they can access the file(s) you share. They will be automatically placed in our free plan and won’t need to pay anything to access files.</div>
          </el-collapse-item>
          <el-collapse-item title="10. Can I remove access to files after sharing them?" name="10">
            <div>Yes. You can navigate to the shared files tab in skizzle extension, select the file, and view the list of users you have shared the file with. Here, you can revoke access to a particular user, who will then no longer be able to download your file.</div>
          </el-collapse-item>
          <el-collapse-item title="11. Is there a help guide to walk me through how to use Skizzle?" name="11">
            <div>You'll find a series of short explainer videos on our <a href="https://www.youtube.com/channel/UC6DOMpY2Z0yXUITWmCn9lxA" target="_blank">Youtube channel.</a></div>
          </el-collapse-item>
          <el-collapse-item title="12. What platforms are currently supported?" name="12">
            <div>We currently support Gmail and Chrome browser. Get in touch with us if you have specific requirements for features or platforms.</div>
          </el-collapse-item>
          <el-collapse-item title="13. What platforms are currently supported?" name="13">
            <div>We currently support Gmail and Chrome browser. Get in touch with us if you have specific requirements for features or platforms.</div>
          </el-collapse-item>
        </el-collapse>
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
      activeNames: ['1']
    };
  },
}
</script>

<style scoped>
.faq {
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

.faqSub {
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 40px;
}

@media (min-width: 768px) {
  .faq {
    padding-top: 22%;
  }
}

@media (min-width: 992px) {
  .faq {
    padding-top: 16%;
  }
}

@media (min-width: 1200px) {
  .faq {
    padding-top: 12%;
  }
}
</style>