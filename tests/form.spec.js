import {test, expect} from '@playwright/test';
import { asyncWrapProviders } from 'node:async_hooks';
test.beforeEach()
test ('Login Form', async ({page}) => {

await page.goto('/form.html');

const locater = page.getByText('LOCATOR PRACTICE 01');
await expect(locater).toHaveText('LOCATOR PRACTICE 01');

const heading = page.getByRole('heading', {name: ('Welcome back')});
await expect(heading).toHaveText('Welcome back');

const text = page.getByTestId('signin-text')
await expect(text).toHaveText('Sign in to continue to your workspace.')

});

test('Email', async ({page}) => {

await page.goto('/form.html');

const emailInput= page.getByLabel('email');
await expect(emailInput).toBeVisible();
await expect(emailInput).toHaveAttribute('type', 'email');
await expect(emailInput).toHaveAttribute('placeholder', 'Enter your email');

});

test('Password', async ({page}) => {

await page.goto('/form.html');

const passwordInput = page.getByLabel('Password');
await expect(passwordInput).toBeVisible();
await expect(passwordInput).toHaveAttribute('type', 'password');
await expect(passwordInput).toHaveAttribute('placeholder', 'Enter your password');



});

test('Checkbox', async ({page}) => {

await page.goto('/form.html');

const checkbox = page.getByRole('checkbox', {name: 'Remember me'});
await expect(checkbox).toBeVisible();
await expect(checkbox).toHaveAttribute('type', 'checkbox');

const link = page.getByRole('link', {name: ('Forgot password?')});
await expect(link).toBeVisible();
await expect(link).toHaveAttribute('href', '#forgot');

});

test('Button', async ({page}) => {

await page.goto('/form.html');

const button = page.getByRole('button', {name: 'Login'});
await expect(button).toBeVisible();
await expect(button).toBeEnabled();
await expect(button).toHaveAttribute('type', 'submit');
await expect(button).toHaveAttribute('title', 'Submit login form');



});