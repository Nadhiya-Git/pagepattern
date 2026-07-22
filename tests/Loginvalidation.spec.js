import { test } from '@playwright/test';
import { credentials } from '../Utils/APIUTIL';
import { Loginpage } from '../PageObject/Loginpage';

for(const data of credentials) {

test("@web loginvalidation",async({page})=>{
    
const username = process.env.APP_USERNAME;
const password = process.env.APP_PASSWORD;
  
    const login=new Loginpage(page);
  

   await login .navigateToLoginPage();
   await login.loginvaliation(username,password);

})};