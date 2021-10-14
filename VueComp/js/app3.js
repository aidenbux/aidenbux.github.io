let inlineTemp = {
    props: ['message']
  }
  
  new Vue({
    el: '#app3',
    data: {
      message: 'Greetings!',
    },
    components: {
      'inline-temp': inlineTemp
    }
  });
  