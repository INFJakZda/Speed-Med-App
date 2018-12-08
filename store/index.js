import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      medicines: []
    },
    mutations: {
      setMedicines(state, medicines) {
        state.medicines = medicines
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get('/medicine.json')
          .then(data => {
            const medicineArray = []
            for (const key in data) {
              medicineArray.push({ ...data[key], id: key })
            }
            vuexContext.commit('setMedicines', medicineArray)
          })
          .catch(e => context.error(e))
      },
      setMedicines(vuexContext, medicines) {
        vuexContext.commit('setMedicines', medicines)
      }
    },
    getters: {
      medicines(state) {
        return state.medicines
      }
    }
  })
}

export default createStore
