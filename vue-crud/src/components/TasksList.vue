<template>
  <table class="table table-striped">
    <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Status</th>
            <th scope="col">Number</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in tasks" :key="item.id">
            <th scope="row">{{item.id}}</th>
            <td>{{item.name}}</td>
            <td>{{item.category.join(", ")}}</td>
            <td>{{item.status}}</td>
            <td>{{item.number}}</td>
            <td>
                <button
                    class="btn btn-danger btn-sm"
                    @click="deleteTask(task.id)"
                >
                    Delete
                </button>
            </td>
        </tr>
    </tbody>
    </table>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    computed:{
        ...mapState(['tasks'])
    },
    methods:{
        ...mapActions(['deleteTask'])
    }
}
</script>

<style>

</style>