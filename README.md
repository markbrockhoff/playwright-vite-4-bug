# Reproduction of Playwright Bug 20581

To reproduce the bug described in [20581](https://github.com/microsoft/playwright/issues/20581), install the dependencies and run `npm run reproduce-issue`.

The script will clear the playwright cache, run the tests for the component project then the ones for the integration and at least the component tests again.
The last execution will fail, the issue can be temporarily resolved by clearing the cache again.