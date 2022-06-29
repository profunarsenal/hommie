import { createStore } from 'vuex'

export default createStore({
  state: {
    fieldSearch: '',
    metroCheckboxes: [],
  },

  getters: {
    getFieldSearch(state) {
      return state.fieldSearch
    },

    getMetroList(state) {
      return state.metroCheckboxes
    },

  },

  mutations: {
    updateFieldSearch(state, value) {
      state.fieldSearch = value
    },

    updateMetroList(state, value) {
      state.metroCheckboxes = value
    },

  },

  actions: {
  },
})
