import { expect, test } from '@playwright/experimental-ct-vue';
import App from '../../src/App.vue';

test('Integration test', async ({mount}) => {
  const app = await mount(<App />)
  await expect(app).toContainText('Vite + Vue')
})