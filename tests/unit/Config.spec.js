import {shallowMount} from '@vue/test-utils'
import Config from '@/components/Config.vue'
import sinon from 'sinon'

describe('Config', () => {

    it('should have valid default values', () => {
        const wrapper = shallowMount(Config);
        expect(wrapper.get('.example'));

        // all totals should equal 100%
        const filtered = wrapper.findAll('.example').filter(value => value.element.dataset.total !== "100");
        expect(filtered.length).toBe(0);
    });

    it('chooses an item based on the weighted probability of each item', () => {
        const wrapper = shallowMount(Config, {data: testItems});
        expect(wrapper.get('.a .probability').text()).toBe("32.5%");
        expect(wrapper.get('.b .probability').text()).toBe("35%");
        expect(wrapper.get('.c .probability').text()).toBe("25%");
        expect(wrapper.get('.d .probability').text()).toBe("7.5%");
    });

    it('allows a new item to be rolled by clicking on the example item', async () => {
        const wrapper = shallowMount(Config, {data: testItems});

        const getItemStub = sinon.stub();
        const setItemStub = sinon.stub();
        const flashStub = sinon.stub();
        getItemStub.returns("foo");

        wrapper.setMethods({ getItem: getItemStub, setItem: setItemStub, flash: flashStub });
        wrapper.get('#roll-400').trigger('click');
        await wrapper.vm.$nextTick();

        expect(setItemStub.calledOnce).toBe(true);
        expect(setItemStub.calledWith("400", "foo")).toBe(true);
        expect(flashStub.calledOnce).toBe(true);

        // looks better if the item changes before the flash on some browsers
        expect(flashStub.calledBefore(setItemStub));
    });

    it('updates the current item', () => {
        const wrapper = shallowMount(Config, {data: testItems,});
        wrapper.vm.setItem(400, 'c');
        expect(defaults[0].current).toBe('c');
        wrapper.vm.setItem(400, 'a');
        expect(defaults[0].current).toBe('a');
    });

    it('returns a list of items for a given distance', () => {
        const wrapper = shallowMount(Config, {data: testItems,});
        expect(wrapper.vm.getItemsForDistance(400)).toBe(defaults[0].items);
        expect(wrapper.vm.getItemsForDistance(1000)).toBe(defaults[1].items);
    });

    it('can get the total probability from a list of items', () => {
        const wrapper = shallowMount(Config, {data: testItems,});
        expect(wrapper.vm.totalProbability(defaults[0].items)).toBe(100.0);
        expect(wrapper.vm.totalProbability(defaults[1].items)).toBe(100.0);
    });

    it('properly distributes items according to their weight', () => {
        const wrapper = shallowMount(Config, {data: testItems,});
        let distribution = {a: 0, b: 0, c: 0, d: 0};
        for (let i = 0; i < 10000; i++) {
            let item = wrapper.vm.getItem(defaults[0].items);
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
        expect(largerA - smallerA).toBeLessThan(151);
        expect(largerB - smallerB).toBeLessThan(151);
        expect(largerC - smallerC).toBeLessThan(151);
        expect(largerD - smallerD).toBeLessThan(151);
    });
});

const testItems = function () {
    return {
        defaults: defaults,
    }
};

const defaults = [{
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
