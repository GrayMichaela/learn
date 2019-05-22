<style lang="less" scoped>
    @import url('./index.less');
</style>
<template>
<div class="chart" ref="chart" />
</template>
<script>
import echarts from"echarts";
export default{
	name:"v-chart"
	,props:{
		loading:{
			require:true
			,type:Boolean
			,default:false
		}
		,config:{
			require:true
			,type:Object
			,default:()=>({})
		}
	}
	,computed:{
		chart(){
			return echarts.init(this.$refs.chart);
		}
	}
	,mounted(){
		this.loadChart();
	}
	,destroyed(){
		this.chart.dispose();
	}
	,methods:{
		loadChart(config = false){
			this.chart.setOption(this.config,config);
		}
	}
	,watch:{
		"loading"(v){
			v ? this.chart.showLoading() : this.chart.hideLoading();
		}
		,"config":"loadChart"
	}
};
</script>