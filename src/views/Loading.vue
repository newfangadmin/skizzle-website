<template>
  <div
    class="loadingContainer"
    v-loading.fullscreen.lock="loading"
    :element-loading-text="loadingText"
  >
    <Header view="contestHome" />
    <div class="emptyContainer">Please wait while we log you in</div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: "Loading",
  components: {
    Header
  },
  data() {
    return {
      loading: true,
      loadingText: "Authenticating...",
    };
  },
  async mounted() {
    const url = window.location.href;
    const apiUrl = "https://contest-server.skizzle.email/auth/"
    const postUrl = url.replace("https://skizzle-website.netlify.app/loading", apiUrl);
    const res = await fetch(postUrl, {
      method: "POST",
    });
    if (res.status < 400) {
      res.json().then((result) => {
        const email = result.email
        const token = result.token;
        localStorage.setItem(email, token);
        this.$router.push({path: "/contestHome", params: { email }});
      });
    } else {
      this.$router.push({path: "/contest", params: { err: "err" }});
    }
  }
}
</script>

<style lang="scss" scoped>
.emptyContainer {
  margin-top: 14%;
  height: 100vh;
  text-align: center;
}
</style>