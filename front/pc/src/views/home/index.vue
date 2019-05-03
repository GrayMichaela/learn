<template>
  <div>
    <span>{{test.count}}</span>
    <button @click="what">clicke Me</button>
    <el-checkbox v-model="checked">备选项</el-checkbox>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    test() {
      return this.$store.state;
    }
  },
  methods: {
    what() {
      this.$store.dispatch("test", {
        q: 1
      });
    }
  }
};
</script>