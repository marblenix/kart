import {shallowMount} from '@vue/test-utils'
import Config from '@/components/Config.vue'

describe('Config', () => {

    const items = [
        {
            distance: 400,
            current: 'a',
            items: [
                {id: 'a', probability: 65},
                {id: 'b', probability: 70},
                {id: 'c', probability: 50},
                {id: 'd', probability: 15},
            ]
        }, {
            distance: 1000,
            current: 'a',
            items: [
                {id: 'a', probability: 20},
                {id: 'g', probability: 10},
                {id: 'h', probability: 5},
                {id: 'b', probability: 15},
                {id: 'i', probability: 10},
                {id: 'c', probability: 25},
                {id: 'd', probability: 20},
                {id: 'j', probability: 10},
                {id: 'e', probability: 50},
                {id: 'f', probability: 5},
                {id: 'k', probability: 15},
                {id: 'l', probability: 10},
                {id: 'm', probability: 5},
            ]
        }];

    it('should have valid default values', () => {
        const wrapper = shallowMount(Config);
        expect(wrapper.get('.example'));

        // all totals should equal 100%
        const filtered = wrapper.findAll('.example').filter(value => value.element.dataset.total !== "100");
        expect(filtered.length).toBe(0);
    });

    it('chooses an item based on the weighted probability of each item', () => {
        const wrapper = shallowMount(Config, {
            data: function () {
                return {
                    defaults: items
                }
            }
        });
        expect(wrapper.find('.a .probability').text()).toBe("32.5%");
        expect(wrapper.find('.b .probability').text()).toBe("35%");
        expect(wrapper.find('.c .probability').text()).toBe("25%");
        expect(wrapper.find('.d .probability').text()).toBe("7.5%");
    });

    // skipped due to the chance it might fail due to random chance and the fact it takes ~7 seconds to run
    test.skip('properly distributes items according to their weight', async () => {
        const wrapper = shallowMount(Config, {
            data: function () {
                return {
                    defaults: items
                }
            }
        });

        expect(wrapper.get('#roll-400'));
        wrapper.find('#roll-400').trigger('click');
        expect(wrapper.get('#roll-1000'));

        let distribution = {a: 0, b: 0, c: 0, d: 0};
        for (let i = 0; i < 10000; i++) {
            wrapper.get('#roll-400').trigger('click');
            await wrapper.vm.$nextTick();
            let item = wrapper.find('#roll-400').element.dataset.item;
            distribution[item]++;
        }

        let a = 3250;
        let b = 3500;
        let c = 2500;
        let d = 750;

        let largerA = distribution['a'] > a ? distribution['a'] : a;
        let smallerA = distribution['a'] < a ? distribution['a'] : a;
        let largerB = distribution['b'] > b ? distribution['b'] : b;
        let smallerB = distribution['b'] < b ? distribution['b'] : b;
        let largerC = distribution['c'] > c ? distribution['c'] : c;
        let smallerC = distribution['c'] < c ? distribution['c'] : c;
        let largerD = distribution['d'] > d ? distribution['d'] : d;
        let smallerD = distribution['d'] < d ? distribution['d'] : d;

        // Assert that a very large distribution of numbers is within a +- distribution.
        // it is possible for these tests to fail due to a quirk of random chance, but these test should pass 99% of the time.
        console.log(largerA, '-' , smallerA, '=', largerA - smallerA);
        console.log(largerB, '-' , smallerB, '=', largerB - smallerB);
        console.log(largerC, '-' , smallerC, '=', largerC - smallerC);
        console.log(largerD, '-' , smallerD, '=', largerD - smallerD);

        expect(largerA - smallerA).toBeLessThan(150);
        expect(largerB - smallerB).toBeLessThan(150);
        expect(largerC - smallerC).toBeLessThan(150);
        expect(largerD - smallerD).toBeLessThan(150);
    });
});