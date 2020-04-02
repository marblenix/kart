<script>
import { BListGroup, BListGroupItem } from 'bootstrap-vue';

/**
 * The following distributions are used by version 4.1 of Mario Kart 8 to
 * determine the probability of obtaining a certain item when an Item Box
 * is opened.
 *
 * The probability of each item is coded as a percentage multiplied by two.
 */
export default {
  name: 'Config',
  components: {
    BListGroup,
    BListGroupItem
  },

  data: function () {
    return {
      defaults: [
        {
          distance: 400,
          current: 'Banana',
          items: [
            { id: 'Coin', probability: 70 },
            { id: 'Banana', probability: 65 },
            { id: 'GreenShell', probability: 50 },
            { id: 'Mushroom', probability: 5 },
            { id: 'RedShell', probability: 5 },
            { id: 'SuperHorn', probability: 5 }
          ]
        },
        {
          distance: 1000,
          current: 'Banana',
          items: [
            { id: 'RedShell', probability: 50 },
            { id: 'GreenShell', probability: 25 },
            { id: 'Mushroom', probability: 20 },
            { id: 'Banana', probability: 20 },
            { id: 'TripleBanana', probability: 15 },
            { id: 'Coin', probability: 15 },
            { id: 'TripleGreenShells', probability: 10 },
            { id: 'PiranhaPlantPot', probability: 10 },
            { id: 'FireFlower', probability: 10 },
            { id: 'BombOmb', probability: 10 },
            { id: 'TripleRedShells', probability: 5 },
            { id: 'SuperHorn', probability: 5 },
            { id: 'BoomerangFlower', probability: 5 }
          ]
        },
        {
          distance: 2000,
          current: 'Banana',
          items: [
            { id: 'RedShell', probability: 30 },
            { id: 'Mushroom', probability: 25 },
            { id: 'GreenShell', probability: 20 },
            { id: 'TripleRedShells', probability: 15 },
            { id: 'TripleMushroom', probability: 15 },
            { id: 'PiranhaPlantPot', probability: 15 },
            { id: 'BombOmb', probability: 15 },
            { id: 'TripleGreenShells', probability: 10 },
            { id: 'TripleBanana', probability: 10 },
            { id: 'FireFlower', probability: 10 },
            { id: 'BoomerangFlower', probability: 10 },
            { id: 'Banana', probability: 10 },
            { id: 'Crazy8', probability: 5 },
            { id: 'SuperHorn', probability: 5 },
            { id: 'Coin', probability: 5 }
          ]
        },
        {
          distance: 3300,
          current: 'Blooper',
          items: [
            { id: 'TripleMushroom', probability: 60 },
            { id: 'Mushroom', probability: 50 },
            { id: 'RedShell', probability: 20 },
            { id: 'GreenShell', probability: 15 },
            { id: 'TripleRedShells', probability: 10 },
            { id: 'TripleGreenShells', probability: 10 },
            { id: 'BoomerangFlower', probability: 10 },
            { id: 'Crazy8', probability: 5 },
            { id: 'PiranhaPlantPot', probability: 5 },
            { id: 'FireFlower', probability: 5 },
            { id: 'BombOmb', probability: 5 },
            { id: 'Blooper', probability: 5 }
          ]
        },
        {
          distance: 5500,
          current: 'Blooper',
          items: [
            { id: 'TripleMushroom', probability: 85 },
            { id: 'Mushroom', probability: 30 },
            { id: 'Star', probability: 25 },
            { id: 'GoldenMushroom', probability: 25 },
            { id: 'RedShell', probability: 10 },
            { id: 'BulletBill', probability: 10 },
            { id: 'Crazy8', probability: 5 },
            { id: 'SpinyShell', probability: 5 },
            { id: 'Blooper', probability: 5 }
          ]
        },
        {
          distance: 8000,
          current: 'BulletBill',
          items: [
            { id: 'TripleMushroom', probability: 65 },
            { id: 'Star', probability: 40 },
            { id: 'GoldenMushroom', probability: 40 },
            { id: 'BulletBill', probability: 30 },
            { id: 'Mushroom', probability: 10 },
            { id: 'Crazy8', probability: 5 },
            { id: 'SpinyShell', probability: 5 },
            { id: 'LightningBolt', probability: 5 }
          ]
        },
        {
          distance: 13000,
          current: 'BulletBill',
          items: [
            { id: 'BulletBill', probability: 60 },
            { id: 'GoldenMushroom', probability: 55 },
            { id: 'TripleMushroom', probability: 35 },
            { id: 'Star', probability: 35 },
            { id: 'LightningBolt', probability: 10 },
            { id: 'SpinyShell', probability: 5 }
          ]
        },
        {
          distance: 26000,
          current: 'BulletBill',
          items: [
            { id: 'BulletBill', probability: 85 },
            { id: 'GoldenMushroom', probability: 60 },
            { id: 'Star', probability: 30 },
            { id: 'LightningBolt', probability: 15 },
            { id: 'TripleMushroom', probability: 10 }
          ]
        },
        {
          distance: 999998,
          current: 'BulletBill',
          items: [
            { id: 'BulletBill', probability: 70 },
            { id: 'GoldenMushroom', probability: 60 },
            { id: 'Star', probability: 40 },
            { id: 'TripleMushroom', probability: 30 }
          ]
        },
        {
          distance: 999999,
          current: 'BulletBill',
          items: [
            { id: 'BulletBill', probability: 70 },
            { id: 'GoldenMushroom', probability: 60 },
            { id: 'Star', probability: 40 },
            { id: 'TripleMushroom', probability: 30 }
          ]
        }
      ]
    };
  },

  methods: {
    /**
     * Updates the item from a click event
     * @param {Event} e the user-fired click event
     * @returns {void}
     */
    updateItem: function (e) {
      const target = e.currentTarget;
      const distance = target.dataset.distance;
      const items = this.getItemsForDistance(distance);
      this.setItem(distance, this.getItem(items));
      this.flash(target);
    },

    /**
     * Converts the item.probability to a percent-friendly field.
     * @param {Object} item the item to return the probability for
     * @returns {Number} the item probability as a percentage
     */
    toPercent: function (item) {
      return item.probability / 2;
    },

    /**
     * Return the total probability of all items in a list. Useful mostly for testing.
     * @param {Object[]} items an array of items
     * @returns {Number} the total probability of all items in the list, should always be 100
     */
    totalProbability: function (items) {
      let probability = 0;
      items.forEach(function (item) {
        probability += item.probability;
      });
      return probability / 2;
    },

    /**
     * Updates the current item for a given distance for the example roll.
     * @param {Number} distance the distance from first place
     * @param {String} itemId the id of the item to set as the current
     * @returns {void}
     */
    setItem: function (distance, itemId) {
      this.defaults.forEach(value => {
        if (value.distance === parseInt(distance)) {
          value.current = itemId;
        }
      });
    },

    /**
     * Based on the distance from first place, return a list of possible items to draw from.
     * @param {Number} distance the current distance from first place
     * @returns {Array} a list of items
     */
    getItemsForDistance: function (distance) {
      let items = [];
      for (const value of this.defaults) {
        if (distance <= value.distance) {
          items = value.items;
          break;
        }
      }
      return items;
    },

    /**
     * Based on the probability of an item in a list, get a random item.
     * @param {Object[]} items the list of items to draw from; expected to have item.probability and item.id
     * @returns {String} the id of the item randomly chosen
     */
    getItem: function (items) {
      let total = 0;
      const ranges = [];
      items.forEach(function (item) {
        ranges.push(item.probability);
      });
      for (let i = 0, len = items.length; i < len; i++) {
        ranges[i] = [total, (total += ranges[i])];
      }
      const randomNumber = Math.floor(Math.random() * total);
      for (let i = 0, len = ranges.length; i < len; i++) {
        if (randomNumber >= ranges[i][0] && randomNumber <= ranges[i][1]) {
          return items[i].id;
        }
      }
    },

    /**
     * Flash an element for a very short while.
     * @param {Event} element the element to blink
     * @returns {void}
     */
    flash: function (element) {
      let op = 0.1;
      const timer = setInterval(() => {
        if (op >= 1) {
          clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ')';
        op += op * 0.1;
      }, 10);
    }
  }
};
</script>

<template>
  <b-list-group>
    <b-list-group-item
      v-for="d in defaults"
      :key="d.distance"
    >
      <p>Distance from first place: &lt;= {{ d.distance }}</p>
      <p>
        Example Roll:
        <span
          :id="'roll-' + d.distance"
          :class="d.current"
          :data-total="totalProbability(d.items)"
          :data-distance="d.distance"
          :data-item="d.current"
          class="example item-image"
          @click="updateItem($event)"
        >{{ d.current }}</span>
      </p>
      <p>Possible Items:</p>
      <b-list-group>
        <b-list-group-item
          v-for="i in d.items"
          :key="i.id"
          :class="'form-split-input-slider-' + d.distance"
          :data-probability="i.probability"
        >
          <span
            class="item-image"
            :class="i.id"
          >
            {{ i.id }}:
            <span class="probability">{{ toPercent(i) }}%</span>
          </span>
        </b-list-group-item>
      </b-list-group>
    </b-list-group-item>
  </b-list-group>
</template>

<style src="../../public/css/item-images.css"></style>
<style scoped>
.example {
  margin-left: 0.5em;
  padding: 0.25em;
  user-select: none;
}

.example:hover {
  cursor: pointer;
}
</style>
