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
  mounted() {
    const url = window.location.href;
    console.log(url);
    const apiUrl = "https://contest-server.skizzle.email/auth"
    const postUrl = url.replace("https://skizzle-website.herokuapp.com/loading", apiUrl);
    const res = await fetch(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (res.status < 400) {
      res.json().then((result) => {
        console.log(result);
      })
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