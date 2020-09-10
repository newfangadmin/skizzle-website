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
    const url = this.$route.query.page
    const apiUrl = "contest-server.skizzle.email/auth"
    const postUrl = url.replace(/skizzle-website.herokuapp.com\/contest/g, apiUrl);
    console.log(postUrl);
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