import { test, expect } from '@playwright/test';

test('Conduit home page has a title', async ({ page }) => {
  await page.goto('https://conduit.mate.academy');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Conduit/);
});