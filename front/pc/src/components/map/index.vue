<style lang="less" scoped>
@import url("./index.less");
</style>
<template>
  <div class="container" ref="container"></div>
</template>
<script>
import styleJson from "./style.js";
export default {
  name: "VMap",
  mounted() {
    this.$nextTick(() => {
      this.loadMap();
    });
  },
  methods: {
    loadMap() {
      const map = new BMap.Map(this.$refs.container); //初始化
      const point = new BMap.Point(116.404, 39.915); //创建坐标
      map.centerAndZoom(point, 15); //中心缩放
      //   map.panTo(new BMap.Point(116.409, 39.918)); //移动地图当前视图
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      map.addControl(new BMap.NavigationControl()); //平移缩放控件
      map.addControl(new BMap.ScaleControl()); //比例尺
      map.addControl(new BMap.OverviewMapControl()); //缩略地图
      map.addControl(new BMap.MapTypeControl()); //地图类型
      map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
      map.setMapStyleV2({ styleJson });
    }
  }
};
</script>
