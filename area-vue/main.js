import Vue from "vue";
import myarea from "myarea";



new Vue({
	el:"#app",
	components:{myarea},
	data:function(){
		return {
			re:""
		}
	},
	methods:{
		haha:function(d){
			this.re=d;
			console.log(d);
		}
	}
})