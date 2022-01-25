<template>
  <Navbar />
  <section class="container">
    <router-view/>
  </section>
  
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components:{
    Navbar
  }
}
</script>


<style>

</style>
