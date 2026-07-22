import { test } from '@playwright/test';

import { Loginpage } from '../PageObject/Loginpage';



test("@web loginvalidation",async({page})=>{
    
const username = process.env.APP_USERNAME;
const password = process.env.APP_PASSWORD;
  
    const login=new Loginpage(page);
  

   await login .navigateToLoginPage();
   await login.loginvaliation(username,password);

});