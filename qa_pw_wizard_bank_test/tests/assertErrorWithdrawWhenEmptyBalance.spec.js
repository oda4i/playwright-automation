import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Assert the customer cannot withdraw money with empty balance', async ({
  page,
}) => {
  /* 
  Test:
  1. Open Wizard bank login for Customer using link 
    https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer
  2. Select "Ron Weasly"
  3. Click [Login]
  4. Assert the "Balance : 0" text is present
  5. Click [Withdrawl]
  6. Type amount of money to withdraw
  7. Click [Withdraw]
  8. Assert error message is visible:
    'Transaction Failed. You can not withdraw amount more than the balance.'
  */
  const cifra = faker.number.int(100).toString();
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
  await page.locator('#userSelect').selectOption('Ron Weasly');
  await page.getByRole('button', {name: 'login'}).click();
  await expect(page.locator('.center .ng-binding').nth(1)).toHaveText("0");
  await page.locator('.center [class="btn btn-lg tab"]').nth(2).click();
  await page.locator('input', {name: 'amount'}).fill(cifra);
  await page.getByRole('button', {name: 'Withdraw'}).nth(1).click();
  await expect(page.getByText('Transaction Failed. You can not withdraw amount more than the balance.')).toBeVisible();
    
});
