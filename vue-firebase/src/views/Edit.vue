<template>
  Edit {{$route.params.id}} - {{task}}
    <form @submit.prevent="updateTask(task)">
        <Input :task="task"/>
    </form>
</template>

<script>
import Input from '../components/Input.vue'
import {mapState, mapActions} from 'vuex'


export default {
    components:{
        Input   
    },
    computed:{
        ...mapState(['task'])
    },
    methods:{
        ...mapActions(['editTasks','updateTask'])
    },
    created(){
        this.editTasks(this.$route.params.id)
    }
}
</script>

<style>

</style>