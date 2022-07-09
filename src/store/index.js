import { createStore } from 'vuex'

export default createStore({
  state: {
    buildings: [],
    fieldSearch: '',
    metroCheckboxes: [],
    buildCheckboxes: {
      anyBuild: true,
      buildCheckboxesArray: []
    },
    options: {
      parking: false,
      school: false,
      kindergarten: false,
      studio: false,
      repair: false,
      lowRise: false,
      penthouse: false,
    },
    credit: false,
    isDarkTheme: false
  },

  getters: {
    FIELDSEARCH(state) {
      return state.fieldSearch
    },

    BUILDINGS(state) {
      return state.buildings
    },

    METRO(state) {
      return state.metroCheckboxes
    },

    BUILDCHECKBOXES(state) {
      return state.buildCheckboxes
    },

    OPTIONS(state) {
      return Object.keys(state.options).filter(
        (key) => state.options[key]
      );
    },

    CREDIT(state) {
      return state.credit
    },

    isDarkTheme(state) {
      return state.isDarkTheme
    }
  },

  mutations: {
    setBuildings(state, payload) {
      state.buildings = payload
    },

    updateFieldSearch(state, value) {
      state.fieldSearch = value
    },

    updateMetroCheckboxes(state, value) {
      state.metroCheckboxes = value
    },

    updateAnyCheckbox(state, value) {
      state.buildCheckboxes.anyBuild = value
      state.buildCheckboxes.buildCheckboxesArray.length = 0;
    },

    updatebuildCheckboxes(state, value) {
      state.buildCheckboxes.anyBuild = false;
      state.buildCheckboxes.buildCheckboxesArray = value
    },

    updateOptionParking(state, value) {
      state.options.parking = value
    },

    updateOptionSchool(state, value) {
      state.options.school = value
    },

    updateOptionKindergarten(state, value) {
      state.options.kindergarten = value
    },

    updateOptionStudio(state, value) {
      state.options.studio = value
    },

    updateOptionRepair(state, value) {
      state.options.repair = value
    },

    updateOptionLowRise(state, value) {
      state.options.lowRise = value
    },

    updateOptionPenthouse(state, value) {
      state.options.penthouse = value
    },

    updateCredit(state, value) {
      state.credit = value
    },

    resetForm(state) {
      state.metroCheckboxes.length = 0;
      state.buildCheckboxes.anyBuild = true
      state.buildCheckboxes.buildCheckboxesArray.length = 0;
      state.credit = false;
      state.options = {
        parking: false,
        school: false,
        kindergarten: false,
        studio: false,
        repair: false,
        lowRise: false,
        penthouse: false,
      }
      state.fieldSearch = '';
    },

    toggleDarkTheme(state, value) {
      state.isDarkTheme = value
    },
  },

  actions: {
    getBuildings({ commit }) {
      fetch("https://api.jsonbin.io/b/62bbfc57402a5b380240adff")
        .then((res) => res.json())
        .then((data) => (commit('setBuildings', data)));
    }
  },
})
