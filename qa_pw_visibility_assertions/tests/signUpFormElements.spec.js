import { test, expect } from '@playwright/test';

test('`Sign up` form elements presence', async ({ page }) => {
  /*
  1. Go to the Conduit Sign-up page https://conduit.mate.academy/user/register
  2. Assert that the header 'Sign up' is visible
  3. Assert that the link 'Have an account?' is visible
  4. Assert that the input field 'Username' is visible
  5. Assert that the input field 'Email' is visible
  6. Assert that the input field 'Password' is visible
  7. Assert that the button 'Sign up' is visible
  */
 await page.goto('https://conduit.mate.academy/user/register');
 await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
 await expect(page.getByRole('link', { name: 'Have an account?' })).toBeVisible();
 await expect(page.getByPlaceholder('Username')).toBeVisible();
 await expect(page.getByPlaceholder('Email')).toBeVisible();
 await expect(page.getByPlaceholder('Password')).toBeVisible();
 await expect(page.getByRole('button', { name: 'Sign up' })).toBeVisible();
});
