<template>
  <transition name="flash">
    <van-row>
      <!-- <van-col span="24">
        <van-nav-bar/>
        <van-nav-bar :title="title" left-arrow fixed @click-left="$router.back()"/>
      </van-col>-->
      <van-col span="24">
        <router-view/>
      </van-col>
      <van-col span="24">
        <van-tabbar safe-area-inset-bottom/>
        <van-tabbar fixed safe-area-inset-bottom>
          <van-tabbar-item icon="home-o" replace :to="{name:'home'}">首页</van-tabbar-item>
          <van-tabbar-item icon="search" replace dot info>消息</van-tabbar-item>
          <van-tabbar-item icon="friends-o" replace>我的</van-tabbar-item>
        </van-tabbar>
      </van-col>
    </van-row>
  </transition>
</template>
<script>
export default {
  computed: {
    title() {
      return this.$route.meta.title;
    }
  },
  methods: {
    toTop() {},
    back() {}
  }
};
</script>
<style lang="less">
.header {
  background-color: #ae8866;

  .title {
    font-size: 20px;
    text-align: center;
    height: 100%;
  }
}
</style>