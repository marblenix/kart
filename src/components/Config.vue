<template>
    <ol>
        <li v-for="d in defaults" :key="d.distance">
            <p>Distance from first place: &lt;= {{d.distance}}</p>
            <p>Example Roll:
                <span class="example item-image"
                      :class="d.current"
                      :id="'roll-' + d.distance"
                      :data-total="totalProbability(d.items)"
                      :data-distance="d.distance"
                      :data-item="d.current"
                      @click="newItem($event)">
                    {{d.current}}
                </span>
            </p>
            <ol>
                <li v-for="i in d.items" :key="i.id">
                    <span class="item-image" :class="i.id">{{i.id}}: <span
                            class="probability">{{toPercent(i)}}</span></span>
                </li>
            </ol>
        </li>
    </ol>
</template>

<script>
    /**
     * The following distributions are used by version 4.1 of Mario Kart 8 to
     * determine the probability of obtaining a certain item when an Item Box
     * is opened.
     *
     * The probability of each item is coded as a percentage multiplied by two.
     */
    export default {
        name: 'Config',
        methods: {
            newItem: function (event) {
                let target = event.currentTarget;
                let distance = target.dataset.distance;
                let items = this.getItemsForDistance(distance);
                this.setItem(distance, this.getItem(items));
            },

            toPercent: function (item) {
                return (item.probability / 2) + ' %';
            },
            totalProbability: function (items) {
                let probability = 0;
                items.forEach(function (item) {
                    probability += item.probability;
                });
                return probability / 2;
            },
            setItem: function (distance, itemId) {
                this.defaults.forEach(value => {
                    if (value.distance <= distance) {
                        value.current = itemId;
                    }
                });
            },
            getItemsForDistance(distance) {
                let items = [];
                this.defaults.forEach(value => {
                    if (value.distance <= distance) {
                        items = value.items;
                    }
                });
                return items;
            },
            getItem: function (items) {
                let total = 0;
                let ranges = [];
                items.forEach(function (item) {
                    ranges.push(item.probability);
                });
                for (let i = 0, len = items.length; i < len; i++) {
                    ranges[i] = [total, total += ranges[i]];
                }
                let randomNumber = Math.floor(Math.random() * total);
                for (let i = 0, len = ranges.length; i < len; i++) {
                    if (randomNumber >= ranges[i][0] && randomNumber <= ranges[i][1]) {
                        return items[i].id;
                    }
                }
            }
        },
        data: function () {
            return {
                defaults: [{
                    distance: 400,
                    current: 'Banana',
                    items: [
                        {id: 'Coin', probability: 70},
                        {id: 'Banana', probability: 65},
                        {id: 'GreenShell', probability: 50},
                        {id: 'Mushroom', probability: 5},
                        {id: 'RedShell', probability: 5},
                        {id: 'SuperHorn', probability: 5},
                    ]
                }, {
                    distance: 1000,
                    current: 'Banana',
                    items: [
                        {id: 'RedShell', probability: 50},
                        {id: 'GreenShell', probability: 25},
                        {id: 'Mushroom', probability: 20},
                        {id: 'Banana', probability: 20},
                        {id: 'TripleBanana', probability: 15},
                        {id: 'Coin', probability: 15},
                        {id: 'TripleGreenShells', probability: 10},
                        {id: 'PiranhaPlantPot', probability: 10},
                        {id: 'FireFlower', probability: 10},
                        {id: 'BombOmb', probability: 10},
                        {id: 'TripleRedShells', probability: 5},
                        {id: 'SuperHorn', probability: 5},
                        {id: 'BoomerangFlower', probability: 5},
                    ]
                }, {
                    distance: 2000,
                    current: 'Banana',
                    items: [
                        {id: 'RedShell', probability: 30},
                        {id: 'Mushroom', probability: 25},
                        {id: 'GreenShell', probability: 20},
                        {id: 'TripleRedShells', probability: 15},
                        {id: 'TripleMushroom', probability: 15},
                        {id: 'PiranhaPlantPot', probability: 15},
                        {id: 'BombOmb', probability: 15},
                        {id: 'TripleGreenShells', probability: 10},
                        {id: 'TripleBanana', probability: 10},
                        {id: 'FireFlower', probability: 10},
                        {id: 'BoomerangFlower', probability: 10},
                        {id: 'Banana', probability: 10},
                        {id: 'Crazy8', probability: 5},
                        {id: 'SuperHorn', probability: 5},
                        {id: 'Coin', probability: 5},
                    ]
                }, {
                    distance: 3300,
                    current: 'Blooper',
                    items: [
                        {id: 'TripleMushroom', probability: 60},
                        {id: 'Mushroom', probability: 50},
                        {id: 'RedShell', probability: 20},
                        {id: 'GreenShell', probability: 15},
                        {id: 'TripleRedShells', probability: 10},
                        {id: 'TripleGreenShells', probability: 10},
                        {id: 'BoomerangFlower', probability: 10},
                        {id: 'Crazy8', probability: 5},
                        {id: 'PiranhaPlantPot', probability: 5},
                        {id: 'FireFlower', probability: 5},
                        {id: 'BombOmb', probability: 5},
                        {id: 'Blooper', probability: 5},
                    ]
                }, {
                    distance: 5500,
                    current: 'Blooper',
                    items: [
                        {id: 'TripleMushroom', probability: 85},
                        {id: 'Mushroom', probability: 30},
                        {id: 'Star', probability: 25},
                        {id: 'GoldenMushroom', probability: 25},
                        {id: 'RedShell', probability: 10},
                        {id: 'BulletBill', probability: 10},
                        {id: 'Crazy8', probability: 5},
                        {id: 'SpinyShell', probability: 5},
                        {id: 'Blooper', probability: 5},
                    ]
                }, {
                    distance: 8000,
                    current: 'BulletBill',
                    items: [
                        {id: 'TripleMushroom', probability: 65},
                        {id: 'Star', probability: 40},
                        {id: 'GoldenMushroom', probability: 40},
                        {id: 'BulletBill', probability: 30},
                        {id: 'Mushroom', probability: 10},
                        {id: 'Crazy8', probability: 5},
                        {id: 'SpinyShell', probability: 5},
                        {id: 'LightningBolt', probability: 5},
                    ]
                }, {
                    distance: 13000,
                    current: 'BulletBill',
                    items: [
                        {id: 'BulletBill', probability: 60},
                        {id: 'GoldenMushroom', probability: 55},
                        {id: 'TripleMushroom', probability: 35},
                        {id: 'Star', probability: 35},
                        {id: 'LightningBolt', probability: 10},
                        {id: 'SpinyShell', probability: 5},
                    ]
                }, {
                    distance: 26000,
                    current: 'BulletBill',
                    items: [
                        {id: 'BulletBill', probability: 85},
                        {id: 'GoldenMushroom', probability: 60},
                        {id: 'Star', probability: 30},
                        {id: 'LightningBolt', probability: 15},
                        {id: 'TripleMushroom', probability: 10},
                    ]
                }, {
                    distance: 999998,
                    current: 'BulletBill',
                    items: [
                        {id: 'BulletBill', probability: 70},
                        {id: 'GoldenMushroom', probability: 60},
                        {id: 'Star', probability: 40},
                        {id: 'TripleMushroom', probability: 30},
                    ]
                }, {
                    distance: 999999,
                    current: 'BulletBill',
                    items: [
                        {id: 'BulletBill', probability: 70},
                        {id: 'GoldenMushroom', probability: 60},
                        {id: 'Star', probability: 40},
                        {id: 'TripleMushroom', probability: 30},
                    ],
                }]
            }
        }
    }
</script>

<style scoped>
    ol {
        list-style-type: none;
    }

    .item-image::before {
        background-size: 1em 1em;
        display: inline-block;
        width: 1em;
        height: 1em;
        content: '';
        margin-right: .5em;
    }

    .Banana::before {
        background-image: url('/images/Banana.png');
    }

    .Blooper::before {
        background-image: url('/images/Blooper.png');
    }

    .BombOmb::before {
        background-image: url('/images/Bomb-Omb.png');
    }

    .BoomerangFlower::before {
        background-image: url('/images/BoomerangFlower.png');
    }

    .BulletBill::before {
        background-image: url('/images/BulletBill.png');
    }

    .Coin::before {
        background-image: url('/images/Coin.png');
    }

    .Crazy8::before {
        background-image: url('/images/Crazy8.png');
    }

    .FireFlower::before {
        background-image: url('/images/FireFlower.png');
    }

    .GoldenMushroom::before {
        background-image: url('/images/GoldenMushroom.png');
    }

    .GreenShell::before {
        background-image: url('/images/GreenShell.png');
    }

    .LightningBolt::before {
        background-image: url('/images/LightningBolt.png');
    }

    .Mushroom::before {
        background-image: url('/images/Mushroom.png');
    }

    .PiranhaPlantPot::before {
        background-image: url('/images/PiranhaPlantPot.png');
    }

    .RedShell::before {
        background-image: url('/images/RedShell.png');
    }

    .SpinyShell::before {
        background-image: url('/images/SpinyShell.png');
    }

    .Star::before {
        background-image: url('/images/Star.png');
    }

    .SuperHorn::before {
        background-image: url('/images/SuperHorn.png');
    }

    .TripleBanana::before {
        background-image: url('/images/TripleBanana.png');
    }

    .TripleGreenShells::before {
        background-image: url('/images/TripleGreenShells.png');
    }

    .TripleMushroom::before {
        background-image: url('/images/TripleMushroom.png');
    }

    .TripleRedShells::before {
        background-image: url('/images/TripleRedShells.png');
    }
</style>
