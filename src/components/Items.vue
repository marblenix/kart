<template>
    <b-table striped hover :items="items"></b-table>
</template>

<script>
    export default {
        name: 'Items',
        methods: {},
        data: function () {
            return {
                items: [
                    {
                        id: 'Banana',
                        description: '-1 to the person behind you if they get the answer wrong. If they get the right answer the banana moves to the next person. Banana disappears if everyone behind the player gets the answer correct.'
                    },
                    {
                        id: 'Blooper',
                        description: 'All negative effects for all players except you are doubled on the next turn.'
                    },
                    {
                        id: 'BombOmb',
                        description: '-1 to everyone within 5 of you. -1 to yourself if you miss the answer.'
                    },
                    {
                        id: 'BoomerangFlower',
                        description: '-1 to everyone within 5 in front of you. Misses everyone if you get the answer wrong. Can be used 3 times or abandoned for the next item.'
                    },
                    {id: 'BulletBill', description: '+3 to your next 3 answers.'},
                    {id: 'Coin', description: '+1 to your current score.'},
                    {
                        id: 'Crazy8',
                        description: 'Obtain and use all of the following at once: Coin, Bob-omb, Mushroom, Star, Blooper, Green Shell, Red Shell, and a Banana.'
                    },
                    {id: 'FireFlower', description: '-1 to 5 people in front of you if they get the question wrong.'},
                    {id: 'GoldenMushroom', description: '+5 to your next 3 answers.'},
                    {id: 'GreenShell', description: '-2 to the person in front of you if they get the question wrong.'},
                    {id: 'LightningBolt', description: '-2 to all players except you and they lose all items.'},
                    {id: 'Mushroom', description: '+3 to your next answer.'},
                    {id: 'PiranhaPlantPot', description: '+1 to your next 3 answers, -1 to someone if you pass them.'},
                    {id: 'RedShell', description: '-1 to the person in front of you.'},
                    {
                        id: 'SpinyShell',
                        description: '-10 to the person in first place. -5 to the person in second if they are within 10 points of first place.'
                    },
                    {
                        id: 'Star',
                        description: '+1 to your next 3 answers, you cannot be negatively affected by items for those 3 answers. This includes the LightningBolt.'
                    },
                    {id: 'SuperHorn', description: 'Negate all negative effects of all items for next answers.'},
                    {
                        id: 'TripleBanana',
                        description: '-1 to 3 people behind you if they get a question wrong. 1 banana per person.'
                    },
                    {
                        id: 'TripleGreenShells',
                        description: '-1 to 3 people in front of you if they get a question wrong. 1 shell per person.'
                    },
                    {id: 'TripleMushroom', description: '+3 to your next 3 answers.'},
                    {id: 'TripleRedShells', description: '-1 to 3 people in front of you. 1 shell per person.'},
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
