import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categories: []
    },
    mutations: {
        setPaymentListData(state, payload) {
            // Vue.set(state.paymentsList,0, payload) // перезапись объекта 
            state.paymentsList = payload
        },
        addDataPaymentList(state, payload) {
            state.paymentsList.push(payload)
        },
        setCategoriesListData(state, payload) {
            state.categories = payload
        },
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
        },
        getCategories: state => state.categories
    },
    actions: {
        async fetchData({ commit }) {
            if (this.state.paymentsList.lenght) return
            const res = await new Promise((resolve) => {
                setTimeout(() => {
                    const items = []
                    for (let i = 0; i < 20; i++) {
                        items.push({
                            date: '25.08.2021',
                            category: 'sport',
                            value: i + 53,
                            id: i + 1,
                        })
                    }
                    resolve(items)
                }, 2000)
            })
            return commit('setPaymentListData', res)
        },

        async fetchCategoryList({ commit }) {
            const res = await new Promise((resolve) => {
                setTimeout(() => {
                    const categories = ['sport', 'food', 'education', 'internet', 'other']

                    resolve(categories)
                }, 2000)
            })
            return commit('setCategoriesListData', res)
        }
    },
})