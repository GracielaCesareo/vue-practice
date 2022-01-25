<template>
  <input 
    type="text"
    class="form-control my-2"
    placeholder="Name Field"
    v-model.trim="task.name"
    >

    <div class="mb-3 form-check">
      <input 
        type="checkbox" 
        class="form-check-input" 
        id="exampleCheck1"
        v-model="task.category"
        value="javascript"
        >
      <label class="form-check-label" for="exampleCheck1">Javascript</label>
    </div>
    <div class="mb-3 form-check">
      <input 
        type="checkbox" 
        class="form-check-input" 
        id="exampleCheck2"
        v-model="task.category"
        value="node js"
        >
      <label class="form-check-label" for="exampleCheck2">Node.js</label>
    </div>

    <div class="form-check">
      <input 
      class="form-check-input" 
      type="radio" 
      name="flexRadioDefault1" 
      id="flexRadioDefault1"
      value="priority"
      v-model="task.status"
      >
      <label class="form-check-label" for="flexRadioDefault1">Priority</label>
    </div>
    <div class="form-check">
      <input 
        class="form-check-input" 
        type="radio" 
        name="flexRadioDefault2" 
        id="flexRadioDefault2"
        value="normal"
        v-model="task.status"
      >
      <label class="form-check-label" for="flexRadioDefault2">Normal</label>
    </div>

    <input 
    type="text"
    class="form-control my-2"
    placeholder="Number Field"
    v-model.number="task.number"
    >

    <button 
    type="submit" 
    class="btn btn-dark"
    :disabled="disabledButton"
    > send</button>
</template>

<script>
export default {
    props: {
        task: Object
    },
    computed:{
    disabledButton(){
      if(this.task.name.trim() != '' && this.task.category != [] &&  this.task.status != '' && this.task.number != 0){
        return false
      }else{
        return true
      }
    }
  }
}
</script>
