<script>
export default {
  name: 'Items',
  data: function () {
    return {
      fields: [
        { key: 'id', label: 'Item', sortable: true },
        { key: 'description', label: 'Description' }
      ],
      items: [
        {
          id: 'Banana',
          description:
            '-100 to the person behind you if they get the answer wrong.' +
            ' If they get the right answer the banana moves to the next person.' +
            ' Bananas wrap around to first place if missed by all people behind the user.'
        },
        {
          id: 'Blooper',
          description:
            'All negative effects for all players except you are doubled on the next turn.'
        },
        {
          id: 'BombOmb',
          description:
            '-100 to everyone within 500 points of you.' +
            ' -100 to yourself if you miss the answer.'
        },
        {
          id: 'BoomerangFlower',
          description:
            '-100 to everyone within 500 in front of you.' +
            ' Misses everyone if you get the answer wrong.' +
            ' Can be used 3 times or abandoned for the next item.'
        },
        { id: 'BulletBill', description: '+300 to your next 3 answers, and -300 to everyone you pass' },
        { id: 'Coin', description: '+100 to your current score.' },
        {
          id: 'Crazy8',
          description:
            'Obtain and use all of the following at once:' +
            ' Coin, Bob-omb, Mushroom, Star, Blooper, Green Shell, Red Shell, and a Banana.'
        },
        {
          id: 'FireFlower',
          description:
            '-100 to 5 people in front of you if they get the question wrong.'
        },
        { id: 'GoldenMushroom', description: '+500 to your next 3 answers.' },
        {
          id: 'GreenShell',
          description:
            '-200 to the person in front of you if they get the question wrong.'
        },
        {
          id: 'LightningBolt',
          description:
            '-200 to all players except you and they lose all items and "on next turn" effects.'
        },
        { id: 'Mushroom', description: '+300 to your next answer.' },
        {
          id: 'PiranhaPlantPot',
          description:
            '+100 to your next 3 answers, -100 to someone if you pass them.'
        },
        { id: 'RedShell', description: '-100 to the person in front of you.' },
        {
          id: 'SpinyShell',
          description:
            '-500 to the person in first place.' +
            ' -200 to the person in second if they are within 500 points of first place.'
        },
        {
          id: 'Star',
          description:
            '+100 to your next 3 answers,' +
            ' you cannot be negatively affected by items for those 3 answers.' +
            ' This includes the LightningBolt.' +
            ' If both items are used at the same time, the star always wins.'
        },
        {
          id: 'SuperHorn',
          description:
            'Negate all negative effects of all items for next answers.'
        },
        {
          id: 'TripleBanana',
          description:
            '-100 to 3 people behind you if they get a question wrong.' +
            ' 1 banana per person.' +
            ' Bananas wrap around to first place if missed by all people behind the user.'
        },
        {
          id: 'TripleGreenShells',
          description:
            '-100 to 3 people in front of you if they get a question wrong.' +
            ' 1 shell per person.'
        },
        { id: 'TripleMushroom', description: '+300 to your next 3 answers.' },
        {
          id: 'TripleRedShells',
          description: '-100 to 3 people in front of you. 1 shell per person.'
        }
      ]
    };
  },
  methods: {}
};
</script>

<template>
  <b-table
    id="itemTable"
    striped
    hover
    :items="items"
    :fields="fields"
    primary-key="id"
  >
    <template #cell(id)="data">
      <span
        class="item-image"
        :class="data.value"
      >{{ data.value }}</span>
    </template>
  </b-table>
</template>

<style src="../../public/css/item-images.css"></style>
