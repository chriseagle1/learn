import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [
      {
          title: '吃饭',
          complete: false
      },
      {
          title: '睡觉',
          complete: false
      },
      {
          title: '搬砖',
          complete: true
      }
    ]
  },
  getters: {
  },
  mutations: {
    addTask(state, payload) {
      state.list.push(payload)
    },
    delTask(state, payload) {
      state.list.splice(payload, 1)
    },
    resetList(state, payload) {
      state.list = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
