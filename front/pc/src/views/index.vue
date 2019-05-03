<template>
  <router-view/>
</template>

<script>
export default {
  mounted() {
    !!this.$cookie.getToken()
      ? this.$router.replace({ name: "home" })
      : this.$router.replace({ name: "login" });
  }
};
</script>