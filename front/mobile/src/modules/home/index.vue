<template>
<van-row>
	<van-col span="24">
		<van-search placeholder="请输入搜索关键词" v-model="keyWord" />
	</van-col>
	<transition>
		<van-col span="24" v-if="images.length>0">
			<van-swipe :autoplay="1500" indicator-color="white">
				<van-swipe-item v-for="item in images" :key="item">
					<img class="img" src="item" />
				</van-swipe-item>
			</van-swipe>
		</van-col>
	</transition>
	<transition>
		<van-col span="24" v-if="images.length>0">
			<van-notice-bar mode="closeable" :text="noticeMsg" />
		</van-col>
	</transition>
	<van-col span="24">
		<van-pull-refresh :value="index.loading" @refresh="refreshList">
			<van-list
			:value="index.loading"
			:finished="index.done"
			finished-text="我已经没有什么可以给你了"
			@load="refreshList">
				<van-cell
				v-for="item in index.list"
				:key="item.id"
				:title="item.name"
				:value="item.typeName"
				:label="item.grade" />
			</van-list>
		</van-pull-refresh>
	</van-col>
</van-row>
</template>
<script>
export default{
	data(){
		return{
			keyWord:""
			,loading:false
			,images:[]
			,noticeMsg:""
		};
	}
	,computed:{
		index(){
			return this.$store.state.home;
		}
	}
	,destroyed(){
		this.$store.commit("resetQuery");
	}
	,methods:{
		refreshList(){
			this.getUserList({pageIndex:1});
		}
		,loadMore(){
			this.getUserList({pageIndex:this.index.query.pageIndex + 1});
		}
		,getUserList(query){
			this.$store
				.dispatch("getUserList",{
					...this.index.query
					,...query
				})
				.catch(({msg})=>{
					this.$toast({
						type:"fail"
						,message:msg
						,duration:1000
					});
				});
		}
	}
};
</script>
<style lang="less" scoped>
.img {
  width: 100%;
  height: 100%;
}
</style>