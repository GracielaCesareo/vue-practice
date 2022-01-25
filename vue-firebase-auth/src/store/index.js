import { createStore } from 'vuex'
import router from '../router'

export default createStore({

  state: {
    tasks: [],
    task: {name: '', category:[], status: '', number: 0},
    user: null
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
    cargar(state, payload) {
      state.tasks = payload
    },
    set(state, payload){
      console.log(payload);
      state.tasks.push(payload)
    },
    delete(state, payload){
      state.tasks = state.tasks.filter (task => task.id !== payload)
    },
    edit(state, payload){
      if(!state.tasks.find(task => task.id === payload)){
        router.push('/')
        return
      }
      state.task = state.tasks.find(task => task.id === payload)
    },
    update(state, payload){
      state.task = state.tasks.map(task => task.id === payload.id ? payload : task)
      router.push('/')
    }
  },
  actions: {
    async userRegister( {commit}, user){

      try {
        const res = await fetch ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCBrtS10-MGAEDh45uG7ZoHkIbltuyzUmc', {
          method: 'POST',
          body: JSON.stringify({
            email: user.email, 
            password: user.password,
            returnSecureToken: true
          })
        })

        console.log(res)

        // const dataDB = await res.json()
        // console.log(dataDB)
        // if (dataDB.error) {
        //   return console.log(dataDB.error)
        // }
        commit('setUser', res)

      } catch (error) {
        console.error(error)
      }

     
      // commit('setUser', user)
    },
    // Read tasks
    async readTasks ({commit}){
      try {
        const response = await fetch('https://vue-firebase-api-357ef-default-rtdb.firebaseio.com/task.json')

        const data = await response.json()

        const dataArr = []

        for (let id in data){
          dataArr.push(data[id])
        }

        commit('cargar', dataArr)

      } catch (error) {
        console.error(error)
      }
    },

    // Create task
    async setTasks({commit}, task){
      try {
        
        const response = await fetch(`https://vue-firebase-api-357ef-default-rtdb.firebaseio.com/task/${task.id}.json`,{
          method:'PUT',
          headers:{
            'Content-Type':'application.json'
          },
          body: JSON.stringify(task)
        })

        const data = await response.json()
        console.log(data);
      } catch (error) {
        console.error(error)
      }

      

      commit('set', task)
    },
    // Delete task
    async deleteTasks({commit}, id){

        await fetch(`https://vue-firebase-api-357ef-default-rtdb.firebaseio.com/task/${id}.json`,{
          method:'DELETE'
        })
        commit('delete', id)
    },
    // Edit task
    editTasks({commit}, id){
      commit('edit', id)
    },
    // Update task
    async updateTask({commit}, task){

      try {
        const response = await fetch(`https://vue-firebase-api-357ef-default-rtdb.firebaseio.com/task/${task.id}.json`,{
          method:'PATCH',
          body: JSON.stringify(task)
        })

        const data = await response.json()

        commit('update', data)
      } catch (error) {
        console.error(error)
      }

      
    }
  },
  modules: {
  }
})
