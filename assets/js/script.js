console.log('bella')
const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      newTodo: '',
      arrayTodo: [
        {
            text: 'giacomo',
            done: false
        },
        {
            text: 'giacomo',
            done: false
        },
        {
            text: 'giacomo',
            done: false
        }
      ]
    }
  },
  methods: {

    lineThrough(index){
        console.log(index)
        if(this.arrayTodo[index].done === false){
          return this.arrayTodo[index].done = true  
        }else{
          return this.arrayTodo[index].done = false
        }
        
    },
    removeTodo(index){
        console.log(index)
        this.arrayTodo.splice(index, 1)
    },
    addTodo(){
        this.arrayTodo.unshift({text: this.newTodo, done: false})
    }
  },
  mounted(){
    console.log(this.arrayTodo)
  }
}).mount('#app')