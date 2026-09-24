import { test, expect } from '@playwright/test';

test('Zakat page', async ({ page }) => {

await page.goto('./zakat.html');

const zakat = page.getByRole('heading', {name: 'Calculate Zakat'});
await expect(zakat).toHaveText('Calculate Zakat');

});

test('Formula of zakat', async ({page}) => {

await page.goto('./zakat.html');

const input = page.getByLabel('Enter the whole amount of wealth you have');
await input.fill('10000');

const button = page.getByRole('button', {name: 'Calculate Zakat'});
await button.click();

const zakatValue = page.getByTestId('result');
await expect(zakatValue).toHaveText('250');





});
