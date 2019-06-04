<style lang="less" scoped>
@import url("./index.less");
</style>

<template>
	<transition>
		<el-container class="container">
			<el-main class="main">
				<el-form
					:inline-message="true"
					ref="form"
					:rules="rules"
					label-position="right"
					:model="form"
					label-width="100px">
					<el-form-item label="口令" prop="cipher">
						<el-input
							:readonly="login.loading"
							:minlength="6"
							:maxlength="12"
							v-model="form.cipher"
							clearable
							show-password />
					</el-form-item>
					<el-form-item class="btn">
						<el-button :loading="login.loading" type="primary" round @click="signIn">
							Go!
						</el-button>
					</el-form-item>
				</el-form>
			</el-main>
		</el-container>
	</transition>
</template>
<script>
export default{
	data()
	{
		return{
			form:{cipher:""}
			,rules:{
				cipher:[
					{
						min:6
						,max:12
						,required:true
						,message:"请输入您的口令"
						,trigger:"blur"
					}
				]
			}
		};
	}
	,computed:{
		login()
		{
			return this.$store.state.login;
		}
	}
	,mounted(){
	}
	,methods:{
		validate()
		{
			return new Promise((resolve,reject)=>{
				this.$refs.form.validate(valid=>{
					valid ? resolve(this.form) : reject("请认真填写您的口令");
				});
			});
		}
		,signIn()
		{
			this.validate().then(form=>{
				form ? 1 : 2;
			});
		}
	}
};
</script>