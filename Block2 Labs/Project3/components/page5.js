const plants = [
    {
        id: 1,
        plant: '&#9880;',
    },
    {
        id: 2,
        plant: '&#10048;',
    },
    {
        id: 3,
        plant: '&#10047;',
    }
];

Vue.component('plant-component', {
    template: `
    <div class="tweet">
    <h1>{{plant.plant}}</h1>
    <a class="level-item"
                @click="$emit('add', plant)">
                <strong>
                    +
                </strong>
            </a>
    </div>
    `,
    props: {
        plant: {
            type: Object,
            required: true
        }
    }
});

new Vue({
    el: '#page5',
    data: {
        plants
    },
    methods: {
        addPlant(plant) {
            let newPlant = {};
            let lastPlantObjectID = this.plants[this.plants.length - 1].id;
        
            newPlant = Object.assign({}, plant);
            newPlant.id = lastPlantObjectID + 1;

            this.plants.push(newPlant);
        }
    }
});