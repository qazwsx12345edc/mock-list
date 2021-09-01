import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const router = new Vuex.Store({
  state:{
    keepAlive: []
  },
  mutations:{
    setKeepAlive(state, value){
      state.keepAlive = value
    }
  },
  getters:{
    keepAlive: state => state.keepAlive
  }
})

export default router