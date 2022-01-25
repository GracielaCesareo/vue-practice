import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks:[],
    task:{
      id: '',
      name:'',
      category: [],
      status: '',
      number: 0
    }
  },
  mutations: {
    set(state, payload){
      state.tasks.push(payload)
    },
    // delete(state, payload){
    //   state.tasks = state.tasks.filter(item => item.id !== payload)
    // }
  },
  actions: {
    setTasks({commit}, task){
      console.log(task)
      commit('set', task)
    },
    // deleteTask({commit}, id){
    //   commit('delete', id)
    // }
  },
  modules: {
  }
})
