import { test, expect } from '@playwright/test';

test('Cart updated after clicking plus for drinks', async ({ page }) => {
  /*
  Test:
  1. Open the Coffee Cart menu page https://coffee-cart.app/
  2. Click on the "Cappuccino" cup
  3. Click on the "Espresso" cup
  4. Click one the "Cart" link
  5. Wait for the URL https://coffee-cart.app/cart 
  6. Assert Total Cost for Espresso is '$10.00'
  7. Click + for Espresso
  8. Assert that Total Cost for Espresso is '$20.00'
  9. Assert Total Cost for Cappuccino is '$19.00'
  10. Click + for Cappucino
  11. Assert Total Cost for Cappuccino is '$38.00'
  12. Assert the Total cost of the Cart is $58.00

  Tip: 
  1. Use filter({hasText: "ItemName"}) to find the required drink row. 
    Do not rely on the exact order of the drinks. 
   */
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Cappuccino"]').click();
  await page.locator('[data-test="Espresso"]').click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await page.waitForURL('https://coffee-cart.app/cart');
  await expect(page.locator('.list-item').filter({hasText: 'Espresso'}).getByText('$10.00').nth(0)).toBeVisible();
  await page.getByRole('button', { name: 'Add one Espresso' }).click();
  await expect(page.locator('.list-item').filter({hasText: 'Espresso'}).filter({hasText: '$20.00'})).toBeVisible();
  await expect(page.locator('.list-item').filter({hasText: 'Cappuccino'}).getByText('$19.00').nth(1)).toBeVisible();
  await page.getByRole('button', {name: 'Add one Cappuccino'}).click();
  await expect(page.locator('.list-item').filter({hasText: 'Cappuccino'}).filter({hasText: '$38.00'})).toBeVisible();
  await expect(page.locator('[data-test="checkout"]').filter({hasText: 'Total: $58.00'})).toBeVisible();

});
