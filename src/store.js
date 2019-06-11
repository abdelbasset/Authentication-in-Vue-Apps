import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    signup({commit}, authData){
      axios.post('signupNewUser?key=AIzaSyC31u69mws3DQjoewgC_kmoCw6oPMWaZEA', {
        email: authData.email,
        password : authData.password,
        returnSecureToken : true
      })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    login({commit}, authData){
      axios.post('verifyPassword?key=AIzaSyC31u69mws3DQjoewgC_kmoCw6oPMWaZEA', {
        email: authData.email,
        password : authData.password,
        returnSecureToken : true
      })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }

  },
  getters: {

  }
})