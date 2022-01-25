<template>
  <h1 class="mt-5">Task List</h1>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Categories</th>
            <th scope="col">Status</th>
            <th scope="col">Number</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(task, index) in tasks" :key="index">
                <th scope="row">{{task.id}}</th>
                <td>{{task.name}}</td>
                <td>{{task.category.join(', ')}}</td>
                <td>{{task.status}}</td>
                <td>{{task.number}}</td>
                <td>
                    <button class="btn-danger btn-sm" @click="deleteTasks(task.id)">Delete</button>
                    <router-link
                        class="btn btn-warning ml-2 btn-sm"
                        :to="{
                            name: 'Edit',
                            params:{
                                id: task.id
                            }

                        }"
                    >
                        Edit
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapState, mapActions} from 'vuex'
export default {
    computed:{
        ...mapState(['tasks']),
        
    },
    methods:{
        ...mapActions(['deleteTasks'])
    }
}
</script>

<style>

</style>