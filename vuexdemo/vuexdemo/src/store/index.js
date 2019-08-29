import Vue from 'vue' //引入vue
import Vuex from 'vuex' //引入vuex
//使用Vue
Vue.use(Vuex);

//创建Vue实例
const store=new Vuex.Store({
    state:{
        count:1
    },
    getters:{//类似vue中的computed
        getStateCount:function(state){
            return state.count+1;
        },
    },
    mutations:{
        add(state){
            state.count++;
        },
        reduce(state,n){
            state.count=state.count-n;
        }
    },
    actions:{//注册action 类似于vue中的methods
        add(context){
            context.commit("add");
        },
        reduce(context,n){
            context.commit("reduce",n);
        }
    }
})
//导出实例化store

export default store