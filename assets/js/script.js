console.log('bella')
const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      done: false,
      text: '',
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
        if(this.arrayTodo[index].done === false){
          this.arrayTodo[index].done = true  
        }else{
          this.arrayTodo[index].done = false
        }
        
    },
    removeTodo(index){
        console.log(index)
        this.arrayTodo.splice(index, 1)
    }
  }
}).mount('#app')