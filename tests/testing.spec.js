import { test, expect } from '@playwright/test';


test('first testing',async ({page}) => {
   await page.goto('/testing.html');

   await expect(page.getByTestId('pakistan')).toHaveText('pakistan is my india');


});