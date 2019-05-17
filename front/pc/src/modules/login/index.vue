<style lang="less" scoped>
  @import url("./index.less");
</style>

<template>
  <div id="maps">
    <v-map :point="point" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        point: [116.404, 39.915]
      }
    },
    mounted() {
      setTimeout(() => {
        this.point = [110, 38]
      }, 1500)
    },
  };
</script>