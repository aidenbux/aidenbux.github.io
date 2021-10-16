const namer = Vue.createApp({
    data() {
      return {
        showName: true,
        isActive2: false,
      }
    },
    methods: {
      toggleName() {
          this.isActive2 = true;
          setTimeout(() => this.showName = !this.showName, 1000);
        }
    }

});
  
namer.mount('#page1')