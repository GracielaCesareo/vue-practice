<template>
  <h1 class="my-4">Vue.js Forms</h1>

  <form action="" @submit.prevent="sendForm">
    
    <Input :task="task" />
    
  </form>

    <TasksList />

</template>

<script>
// @ is an alias to /src
import Input from '../components/Input.vue'
import TasksList from '../components/TasksList.vue';
import { mapActions } from "vuex";
const shortid = require('shortid');

export default {
  name: 'Home',
  components:{
    Input,
    TasksList
  },
  data() {
    return{
      task:{
        id: '',
        name:'',
        category: [],
        status: '',
        number: 0
      }
    }
  },
  methods:{
    ...mapActions(['setTasks']),
    sendForm(){
      console.log(this.task);
      // create id 
      this.task.id = shortid.generate()
      console.log(this.task.id);

      // send data
      this.setTasks(this.task)

      // reset form
      this.task = {
        id: '',
        name:'',
        category: [],
        status: '',
        number: 0
      }
    }

    
  }
  
}
</script>
