import { shallowMount } from '@vue/test-utils';
import Grid from '@/components/Grid.vue';

describe('Grid.vue', () => {
  it('passes', () => {
    const wrapper = shallowMount(Grid);
    expect(wrapper).toBeDefined();
  });
});
