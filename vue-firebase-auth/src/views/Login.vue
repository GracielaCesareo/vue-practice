<template>
<h1 class="my-5">Sign Up</h1>
  <form @submit.prevent="sendForm">
      <input 
      type="email"
      placeholder="Email"
      class="form-control my-2"
      v-model.trim="email"
      >
      <input
        type="password"
        placeholder="Password"
        class="form-control my-2"
        v-model.trim="password1"
        >
      <input 
        type="password"
        placeholder="Pass" class="form-control my-2"
        v-model.trim="password2"
        >

      <button
      type="submit"
      class="btn btn-primary"
      :disabled="disabled"
      >
          Sign Up
      </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            email: '',
            password1: '',
            password2: ''
        }
    },
    computed:{
        disabled(){
            if(!this.email.includes('@')){
                return true
            }
            if(this.password1 === this.password2 && this.password1 !== '' && this.password1.length > 5){
                return false
            }
            return true
        }
    },
    methods:{
        ...mapActions(['userRegister']),
        sendForm(){
            this.userRegister({email:this.email, password:this.password1}),

            // reset form
            this.email = '',
            this.password1 = '',
            this.password2 = ''

        }
    }
}
</script>

<style>

</style>