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
    const postUrl = url.replace("https://skizzle.email/loading", apiUrl);
    const res = await fetch(postUrl, {
      method: "POST",
    });
    if (res.status < 400) {
      res.json().then((result) => {
        const email = result.email;
        const token = result.token;
        const firstName = result.first_name;
        const localStorageKey = `skizzleContest|${email}`;
        let firstLogin = false
        if (!localStorage.getItem(localStorageKey)) {
          firstLogin = true;
        }
        localStorage.setItem(localStorageKey, token);
        this.$router.push(`/contestHome/${email}/${firstLogin}/${firstName}`);
      });
    } else {
      this.$router.push(`/contest/err`);
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