<template>
  <Navbar />
  <section class="container">
    <router-view/>
  </section>
  
</template>

<script>
import Navbar from './components/Navbar.vue'
import {mapActions} from 'vuex'

export default {
  components:{
    Navbar
  },
  methods:{
    ...mapActions(['readTasks'])
  },
  created(){
    this.readTasks()
  }
}
</script>


<style>

</style>
