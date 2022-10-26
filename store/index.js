import {PARAMETERS} from '@/config/HttpBase';
import Vue from 'vue'
import Cookies from 'universal-cookie';
let userSession = (process.browser) ? window.localStorage.getItem(PARAMETERS.loginSession) : null
const cookies = new Cookies();
export const state = () => ({
  token:  null,
  userInfo: null,
  superAdmin: false,
  isLogged : false,
  schoolId: "",
  schoolName: "",
  carrersSchoolTop:[]
})


export const getters = {
  carrersSchoolTop(state){
    state.carrersSchoolTop = cookies.get("carrersSchoolTop");
    return state.carrersSchoolTop;
  },
  schoolName(state){
    state.schoolName = cookies.get("schoolName");
    return state.schoolName;
  },
  schoolId(state){
    state.schoolId = cookies.get("schoolId");
    return state.schoolId;
  },
  userInfo(state){
    return state.userInfo
  },
  isLogged (state) {
    console.log('islogged')
    console.log(userSession)
    // commit('updateSession');
    return !!(state.userInfo)
  },
  getToken (state) {
    return 'Bearer ' + state.token
  },
  getName (state) {
    return !!(state.userInfo.name) ? state.userInfo.name : ''
  },
  getSchoolImage (state) {
    return !!(state.userInfo) ? state.userInfo.schoolImage : ''
  },
  getSchoolName (state) {
    return !!(state.userInfo) ? state.userInfo.schoolName : ''
  },
  getUserInfo (state) {
    return !!(state.userInfo) ? state.userInfo.user : ''
  },
  isSuperAdmin (state) {
    // state.superAdmin = cookies.get("superAdmin");
    return cookies.get("superAdmin")?cookies.get("superAdmin"):false
  }
}


export const mutations = {
  addSession (state, session) {
    if (session) {

      cookies.set(PARAMETERS.loginSession, JSON.stringify(session), { path: PARAMETERS.sessionUrl });
     // if (process.browser) {
     //   window.localStorage.setItem(PARAMETERS.loginSession, JSON.stringify(session))
     // }
      if (session.token) {
        state.token = session.token
        state.isLogged = true
      }
      if (session.user) {
        state.userInfo = session.user
      }
      if(session.superAdmin){
        // state.superAdmin = true
        cookies.set("superAdmin", true);
      }
    }
  },
  updateSuperAdmin (state, superAdmin) {
    // state.superAdmin = superAdmin
    cookies.set("superAdmin", true);

    // console.log('state.superAdmin: ', state.superAdmin)
  },
  removeSession (state) {
    // window.localStorage.removeItem(PARAMETERS.loginSession)
    cookies.remove(PARAMETERS.loginSession)
    cookies.remove("carrersSchoolTop");
    cookies.remove("schoolName");
    cookies.remove("schoolId");
    cookies.remove("superAdmin");
    console.log('mutate detecxted')
    state.token = null
    // state.userInfo = null
    // state.isLogged = false
  },
  updateSession (state) {
    if (userSession) {
      state.token = (JSON.parse(userSession)).token
      state.userInfo = (JSON.parse(userSession)).user
      state.isLogged = true
    }
  },
  login (state) {
    // state.isLogged = true
    Vue.set(state, 'isLogged', true)
  },
  setSchool(state, schoolId){
    cookies.set("schoolId", schoolId);
    state.schoolId = schoolId;
  },
  setSchoolName(state, schoolName){
    cookies.set("schoolName", schoolName)
    state.schoolName = schoolName;
  },
  setCarrersTopSchool(state, data){
    cookies.set("carrersSchoolTop", data);
    state.carrersSchoolTop = data;
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {

    console.log('nuxtServerInit')
    const cookies = new Cookies(req.headers.cookie);
    console.log(cookies.get(PARAMETERS.loginSession))
    if (PARAMETERS.loginSession) {
      const userCookie = cookies.get(PARAMETERS.loginSession)
      commit('addSession', userCookie)
      // const token = (userSession) ? (JSON.parse(userSession)).token : null
      // const userInfo = (userSession) ? (JSON.parse(userSession)).user  : null

    }

    // commit('login')
    // if auth token used by external API, fetch here e.g. req.session.authToken
    // then it can be accessed with store on all API calls
    // if (req.session) {
    // } else {
    //   // commit('logout')
    // }
  },
  // login ({ commit }) {
  //   commit('login')
  // },
  //
  // logout ({ commit }) {
  //   commit('logout')
  // }

}
