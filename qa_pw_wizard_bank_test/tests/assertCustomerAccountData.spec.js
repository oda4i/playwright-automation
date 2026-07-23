import { test, expect } from '@playwright/test';

test('Assert customer has correct bank data', async ({ page }) => {

   /* 
  Test:
  1. Open Wizard bank link 
    https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer
  2. Select Hermoine Granger
  3. Click [Login]
  4. Assert Account Number in Dropdown next to the Hermoine Granger name
  5. Assert Account Number text
  5. Assert Balance text
  6. Assert Currency text
  */
 
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
  await page.locator('#userSelect').selectOption('Hermoine Granger');
  await page.locator('[class="btn btn-default"]').click();
  await expect(page.locator('#accountSelect')).toHaveValue("number:1001");
  await expect(page.locator('.center .ng-binding').nth(0)).toHaveText('1001 ');
  await expect(page.locator('.center .ng-binding').nth(1)).toHaveText('5096');
  await expect(page.locator('.center .ng-binding').nth(2)).toHaveText('Dollar');
});

