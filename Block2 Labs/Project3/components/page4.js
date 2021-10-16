const app4 = Vue.createApp({
    data() {
        return {
            message: '',
        }
    },
    computed: {
        reverseMessage() {

            return this.message.split('').reverse().join('');
        },
    }
});

app4.mount("#page4");