let xTemp = {
    template: '#x-template-component',
    props: ['message']
   }
   new Vue({
    el: '#xTempApp',
    data: {
    message: 'Greetings!',
   },
    components: {
   'x-temp': xTemp
   }
   });