<style lang="less" scoped>
  @import url("./index.less");
</style>
<template>
<div class="container" ref="container" />
</template>
<script>
import styleJson from"./style.js";
export default{
	name:"v-map"
	,props:{
		point:{
			type:Array
			,default:()=>[116.404,39.915]
			,validator:(v)=>{
				const[longitude,latitude] = v;
				return!window.isNaN(window.Number(longitude)) && !window.isNaN(window.Number(latitude)) && v.length === 2;
			}
		}
	}
	,mounted(){
		this.$nextTick(()=>{
			this.loadMap();
		});
	}
	,methods:{
		loadMap(){
			const[longitude,latitude] = this.point
				,map = new window.BMap.Map(this.$refs.container) //初始化
				,point = new window.BMap.Point(longitude,latitude); //创建坐标
			map.centerAndZoom(point,15); //中心缩放
			//   map.panTo(new BMap.Point(116.409, 39.918)); //移动地图当前视图
			map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
			map.addControl(new window.BMap.NavigationControl()); //平移缩放控件
			map.addControl(new window.BMap.ScaleControl()); //比例尺
			map.addControl(new window.BMap.OverviewMapControl()); //缩略地图
			map.addControl(new window.BMap.MapTypeControl()); //地图类型
			map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
			map.setMapStyleV2({styleJson});
		}
	}
};
</script>