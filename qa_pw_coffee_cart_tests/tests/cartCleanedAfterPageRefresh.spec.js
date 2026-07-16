import { test, expect } from '@playwright/test';

test('Cart cleaned after page refresh', async ({ page }) => {
  /*
  Test:
  1. Open the Coffee Cart menu page https://coffee-cart.app/
  2. Click on the "Cappuccino" cup
  3. Click one the "Cart" link
  4. Wait for the URL https://coffee-cart.app/cart 
  5. Assert Cappucion is visible in the cart
  6. Reload the page
  7. Assert Cappucion is not viisble (hidden) in the cart
  8. Assert the message "No coffee, go add some" is visible

  Tips: 
  1. Use "await page.reload();" to reload the page.
  2. Use filter({hasText: "ItemName"}) to find the required drink row.
    Do not rely on the exact order of the drinks. 
  */
await page.goto('https://coffee-cart.app/');
await page.locator('[data-cy="Cappuccino"]').click();
await page.getByRole('link', { name: 'Cart page' }).click();
await page.waitForURL('https://coffee-cart.app/cart');
await expect(page.locator('.list-item:not(.cart-preview .list-item)').filter({hasText: 'Cappuccino'})).toBeVisible();
await page.reload();
await expect(page.locator('.list-item:not(.cart-preview .list-item)').filter({hasText: 'Cappuccino'})).not.toBeVisible();
await expect(page.locator('.list').filter({ hasText: 'No coffee, go add some.' })).toBeVisible();
 
});
