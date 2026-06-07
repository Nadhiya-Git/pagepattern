const {test}=require('@playwright/test');
const { credentials } = require('../Utils/APIUTIL');
const { Loginpage } = require('../PageObject/Loginpage');

for(const data of credentials) {

test(`@web loginvalidation  ${data.username}`,async({page})=>{
    

  
    const login=new Loginpage(page);
  

   await login .navigateToLoginPage();
   await login.loginvaliation(data.username, data.password);

})};