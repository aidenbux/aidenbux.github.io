const app3 = Vue.createApp({
    data() {
        return {
            ft: 0,
            inch: 0,
        }
    },
    watch: {
        ft() {
            this.inch = this.ft ? this.ft * 12 : 0;
        },
        inch() {
            this.ft = this.inch ? this.inch / 12 : 0;
        }
      },
});

app3.mount("#page3");