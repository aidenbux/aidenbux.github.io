const tweets = [
    {
        id: 1,
        name: 'Jones',
        userN: '@Jdawg',
        pic: 'img/jones.jpg',
        tweet: 'Hmmm, having a good day. Mmmyeah.',
        likes: 22534,
    },
    {
        id: 2,
        name: 'Bart',
        userN: '@GreenThumb1',
        pic: 'img/bart.jpg',
        tweet: "I'm getting tired of the lawn. Might plant a new one.",
        likes: 43,
    },
    {
        id: 3,
        name: 'Lola',
        userN: '@lalalola',
        pic: 'img/lola.jpg',
        tweet: "Nothing more scary than a haunted garbage disposal.",
        likes: 2,
    }
];

Vue.component('tweet-component', {
    template: `
    <div class="tweet">
    <div class="box">
    <div class="item profilePic">
        <img :src="tweet.pic">
    </div>
    <div class="item content" :tweet="tweet" @add="$emit('add', $event)">
        <p>
            <strong>{{tweet.name}}:</strong><small> {{tweet.userN}}</small>
            <br>
            {{tweet.tweet}}
        </p>
    </div>
    </div>
    <a class="control">
                <span class="icon is-small">
                  <i class="fas fa-heart"></i>
                </span>
                <span class="likes">
                  {{tweet.likes}}
                </span>
            </a>
            <a class="level-item"
                @click="$emit('add', tweet)">
                <span class="icon is-small">
                    <i class="fas fa-plus"></i>
                </span>
            </a>
    <div class="item control has-icons-left">
        <input class="input is-small"
          placeholder="Tweet your reply..." />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>
</div>
    `,
    props: {
        tweet: {
            type: Object,
            required: true
        }
    }
});

new Vue({
    el: '#app',
    data: {
        tweets
    },
    methods: {
        addTweetMessage(tweet) {
            let newTweet = {};
            let lastTweetObjectID = this.tweets[this.tweets.length - 1].id;
        
            newTweet = Object.assign({}, tweet);
            newTweet.id = lastTweetObjectID + 1;

            this.tweets.push(newTweet);
        }
    }
});