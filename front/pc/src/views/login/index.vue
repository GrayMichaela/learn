<template>
  <el-container>
    <canvas class="canvasBg" ref="canvas"></canvas>
  </el-container>
</template>
<script>
export default {
  mounted() {
    console.log(this.$refs.canvas);
  }
};
</script>