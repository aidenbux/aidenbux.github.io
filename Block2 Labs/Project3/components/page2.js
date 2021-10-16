const app = Vue.createApp({
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        changeCount() {
            
            this.count += 1;
            
        },
    }
});

app.mount("#page2");