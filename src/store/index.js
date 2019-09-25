/*
* @Author: 15561
* @Date:   2019-09-22 09:02:17
* @Last Modified by:   15561
* @Last Modified time: 2019-09-23 00:00:41
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let dafaultCity="北京"
try{
	if(localStorage.city){
		dafaultCity=localStorage.city
	}
}catch(e){}
export default new Vuex.Store({
	state:{
		city:dafaultCity
	},
	mutations:{
		changeCity(state,city){
             state.city=city
             try{
             	localStorage.city=city
             }catch(e){}
             
		}
	}
})