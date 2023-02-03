import { expect, test } from '@playwright/experimental-ct-vue';
import HelloWorld from '../../src/components/HelloWorld.vue'

test('Hello World', async ({mount}) => {
  const component = await mount(<HelloWorld msg='Test' />)
  await expect(component).toContainText('Test')
})