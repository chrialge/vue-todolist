console.log('bella')
const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      done: false,
      text: '',
      arrayText: [
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
        if(this.arrayText[index].done === false){
          this.arrayText[index].done = true  
        }else{
          this.arrayText[index].done = false
        }
        
    }
  }
}).mount('#app')