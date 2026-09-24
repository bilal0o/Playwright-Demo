import { test, expect } from '@playwright/test';
import LoginPage from "../pages/loginpage";
import logoutPage from '../pages/logoutpage';




test('Login to application using POM',async ({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/login");

   
    const loginPage = new LoginPage(page);
  

    await loginPage.loginToApplication();


    const logoutpage= new logoutPage(page);
    await logoutpage.logoutFromApplication();
     


})