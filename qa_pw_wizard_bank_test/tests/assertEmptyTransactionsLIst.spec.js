import { test, expect } from '@playwright/test';

test('Assert the empty transactions list has correct values', async ({
  page,
}) => {
  /* 
  Test:
  1. Open Wizard bank login for Customer using link 
    https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer
  2. Select "Albus Dumbledore"
  3. Click [Login]
  4. Click [Transactions]
  5. Assert first column header conatins text "Date-Time"
  6. Assert second column header conatins text "Amount"
  7. Assert first column header conatins text "Transaction Type"
  8. Assert the first row in table is hidden
  */
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
  await page.locator('#userSelect').selectOption('Albus Dumbledore');
  await page.getByRole('button', {name: 'Login'}).click();
  await page.getByRole('button', {name: 'Transactions'}).click();
  await expect(page.locator('thead td').nth(0)).toHaveText('Date-Time');
  await expect(page.locator('thead td').nth(1)).toHaveText('Amount');
  await expect(page.locator('thead td').nth(2)).toHaveText('Transaction Type');
  await expect(page.locator('tbody')).toBeHidden();
 

});
