import { test, expect } from '@playwright/test';


test.beforeEach(async({page})=>{
   await page.goto('/index.html');

})

test('Login form',async ({page}) => {

  

      await  test.step('Fill the name field',async()=>{
            await page.getByTestId('name').fill('ali');
        });

    await test.step('Fill the email field',async() => {
        await page.getByTestId('email').fill('ali@gmail');
     });

   await test.step('Fill the password',async() => {
          await page.getByTestId('password').fill('password123');

    });

    await test.step('click the submit button',async() =>  {
        

    });

    
  
    await page.getByTestId('submit-button').click();

});