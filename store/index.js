import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      medicines: [],
      location: null,
      locationData: {},
      cart: [],
      cartPrice: 0
    },
    mutations: {
      setMedicines(state, medicines) {
        state.medicines = medicines
      },
      location(state, location) {
        state.location = location
      },
      locationData(state, locationData) {
        state.locationData = locationData
      },
      addMedicine(state, medicine) {
        state.cart.push(medicine)
        state.cartPrice += parseFloat(medicine.price)
      },
      removeMedicine(state, medicine) {
        var index = state.cart.indexOf(medicine)
        if (index !== -1) state.cart.splice(index, 1)
        state.cartPrice -= parseFloat(medicine.price)
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
      },
      addMedicine(vuexContext, medicine) {
        vuexContext.commit('addMedicine', medicine)
      },
      removeMedicine(vuexContext, medicine) {
        vuexContext.commit('removeMedicine', medicine)
      }
    },
    getters: {
      medicines(state) {
        return state.medicines
      },
      location(state) {
        return state.location
      },
      locationData(state) {
        return state.locationData
      },
      isLocationSet(state) {
        return state.location !== null
      },
      cart(state) {
        return state.cart
      },
      cartPrice(state) {
        return state.cartPrice
      }
    }
  })
}

export default createStore
