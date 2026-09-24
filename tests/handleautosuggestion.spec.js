import {test , expect} from '@playwright/test';

test('auto suggestion in playwright', async({page})=>{

    await page.goto('https://www.google.com/')
    await page.locator("textarea[name='q']").type('shah rukh khan');
    await page.waitForSelector("//li[@role='presentation']");
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

});


test.only('another test', async ({page}) =>{

    await page.goto('https://www.google.com');
    await page.locator("textarea[name='q']").type("Mukesh Otwani");
    await page.waitForSelector("//li[@role='presentation']");

     const elements = await page.$$("//li[@role='presentation']")

     for(let i=0; i<elements.length; i++)
      {
        const text=await elements[i].textContent();

        if(text.includes("playwright")){
            await elements[i].click();
          break; 
            
        }

      }

});