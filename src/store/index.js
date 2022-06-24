import { createStore } from 'vuex'

export default createStore({
  state: {
    building: [
      {
        id: 1,
        name: "ЖК River House",
        street: 'ул. Ново-Садовая',
        metro: 'Алабинская',
        time: '5 минут пешком',
        term: 'Сдан',
        credit: true,
        comfort: true,
        parking: true,
        kindergarten: true,
        studio: true,
        repair: true,
        lowRise: false,
        penthouse: false,
        image: 'image-1.jpg'
      },

    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
