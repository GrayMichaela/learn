export default{
	setToken(token = ""){
		window.localStorage.setItem("token",token);
	}
	,getToken(){
		return window.localStorage.getItem("token");
	}
	,setUserInfo(userInfo = {}){
		window.localStorage.setItem("userInfo",JSON.stringify(userInfo));
	}
	,getUserInfo(){
		return JSON.parse(window.localStorage.getItem("userInfo") || "{}");
	}
};