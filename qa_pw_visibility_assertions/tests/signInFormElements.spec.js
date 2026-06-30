import { test, expect } from '@playwright/test';

test('`Sign in` form elements presence', async ({ page }) => {
  /*
  1. Go to the Conduit Sign-in page https://conduit.mate.academy/user/login
  2. Assert that the header 'Sign in' is visible
  3. Assert that the link 'Need an account?' is visible
  4. Assert that the input field 'Email' is visible
  5. Assert that the input field 'Password' is visible
  6. Assert that the button 'Sign in' is visible
  */

  await page.goto('https://conduit.mate.academy/user/login');
  await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Need an account?' }),
  ).toBeVisible();
  await expect(page.getByPlaceholder('Email')).toBeVisible();
  await expect(page.getByPlaceholder('Password')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
});
