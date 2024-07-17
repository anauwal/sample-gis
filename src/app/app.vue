<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import { getSessionData, processSessionData } from '../views/getSession/session'
import { U } from "@adc/vigour-ui/lib/spl";

export default {
  data() {
    return {
      url: ''
    }
  },
  async mounted() {
    await U.initCsrfToken();
    await this.getCurrentUrl();
    await this.fetchUserData();
  },
  methods: {
    async getCurrentUrl() {
      this.url = window.location.href;
    },
    async fetchUserData() {
      try {
        const sessionData = await getSessionData(this.url.toString());
        console.log('Session data:', sessionData);
        processSessionData(sessionData);
      } catch (error) {
        console.error('Error fetching session data:', error);
      }
    }

  }
}
</script>
<style>
@import '../assets/style/netdrone.css';
</style>
