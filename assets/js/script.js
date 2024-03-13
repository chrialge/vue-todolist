console.log('bella')
const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      done: false,
      text: '',
      arrayText: [
        'Giacomo',
        'Francesco',
        'lorenzo',
        'Ricardo'
      ],
    }
  },
  methods: {

    lineThrough(index){
        if(this.arrayText[index]){
          this.done = true  
        }
        
    }
  }
}).mount('#app')