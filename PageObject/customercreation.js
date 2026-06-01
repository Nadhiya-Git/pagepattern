const {test}=require('@playwright/test');
const APIUTIL=require('../Utils/APIUTIL');
const  loginpage=require('../PageObject/loginpage');

test('@web loginvalidation',async({page})=>{
    
    const login=new loginpage(page);
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
})