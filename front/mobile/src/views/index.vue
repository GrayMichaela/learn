<template>
  <van-row>
    <van-col span="24">
      <van-search placeholder="请输入搜索关键词" v-model="keyWord"/>
    </van-col>
    <van-col span="24" v-if="images.length>0">
      <van-swipe :autoplay="1500" indicator-color="white">
        <van-swipe-item v-for="item in images" :key="item">
          <img class="img" v-lazy="item">
        </van-swipe-item>
      </van-swipe>
    </van-col>
    <van-col span="24" v-if="images.length>0">
      <van-notice-bar mode="closeable" :text="noticeMsg"></van-notice-bar>
    </van-col>
  </van-row>
</template>
<script>
export default {
  data() {
    return {
      keyWord: "",
      loading: false,
      images: [],
      noticeMsg: ""
    };
  },
  computed: {
    test() {
      return this.$store.state;
    }
  },
  mounted() {
    this.pushData();
  },
  methods: {
    pushData() {
      setTimeout(() => {
        this.images.push(
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556562583572&di=69320a6c45a096263c853488f35a66cc&imgtype=0&src=http%3A%2F%2Fimg1.gamersky.com%2Fimage2015%2F10%2F20151018lyq_2%2Fimage003_S.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556562635237&di=95059d2dea2138e652d890420f3edd80&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F472cc10a656e5e5501f3f9963553c32986169e38.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870128834,2908621439&fm=26&gp=0.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556563122871&di=9b571f2c8dfcc337f3e9af6b19fe30b2&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109000614_RNjJE.thumb.700_0.jpeg"
        );
      }, 1000);
      setTimeout(() => {
        this.noticeMsg =
          "有天我睡醒看到我的身边没有你,在我的右边是你曾经喜欢的玩具,可当我站起身来在房间里寻找你,留下的只有带着你味道的一封信";
      }, 1000);
    },
    what() {
      this.$store
        .dispatch("list", {
          pageIndex: 1
        })
        .then(res => {
          this.res = res;
        });
    }
  }
};
</script>
<style lang="less" scoped>
.img {
  width: 100%;
}
</style>
