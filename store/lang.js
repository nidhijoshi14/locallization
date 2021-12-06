import axios from "axios";
export const state = {
  selectedLang: '',
  menuList :[]
};


// mutations
export const mutations = {
  SET_MENU_LIST(state, data) {
    state.menuList = data
  },
  SET_LANG(state, data) {
    state.selectedLang = data
  },
}

// getters
export const getters = {
   getMenuList(state){
     return state.menuList;
  },
   getSelectedLang(state){
     return state.selectedLang;
  }

}
//actions
export const actions = {
	setMenuList({ commit}) {
    commit("SET_MENU_LIST", []);
    const resp = axios.get('https://admin.bookcab.fr/menus').then((response) => {
          commit("SET_MENU_LIST", response);
    })
    return resp;
  },
  setLang({ commit },data) {
    commit("SET_LANG",data);   
  }
}