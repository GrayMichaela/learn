<template>
  <div>
    <span>{{test.count}}</span>
    <button @click="what">clicke Me</button>
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