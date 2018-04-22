
import Vue from 'vue'

Vue.filter('premiere',(value)=>{
	let date = new Date(value)

	return (date.getMonth()+1) +'月' + date.getDate()+ '日'
})