import { test, expect } from '@playwright/test';

test('Successful `Sign in` flow test', async ({ page }) => {
  const email = 'email' + Date.now() + '@gmail.com';
  const password = 'password' + Date.now();
  const username = 'user' + Date.now();
  console.log('Email:', email);
  console.log('Password:', password);
  /*
  1. Open the Conduit login page https://conduit.mate.academy/user/login
  2. Enter the Email of existing user
  3. Enter the Password of existing user
  4. Click Sign in button
  5. Wait for the Home page URL https://conduit.mate.academy
  6. Click on 'Your Feed' tab
  */
  await page.goto('https://conduit.mate.academy/user/register');
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.waitForURL('https://conduit.mate.academy');
  await page.getByText('Your Feed').click();
  await page.context().clearCookies();
  await page.goto('https://conduit.mate.academy/user/login');
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForURL('https://conduit.mate.academy');
  await page.getByText('Your Feed').click();
  });
