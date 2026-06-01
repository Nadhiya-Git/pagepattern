class  Loginpage
{
    constructor(page){
this.page=page;
        this.username=page.locator('#username'  ) ;
     this.password=page.locator('#password');
    this.loginbutton=page.locator('#submitBtn');
    }


    async navigateToLoginPage(){

await this.page.goto("https://dev-demo-g7-product.excelacom.in/Businessapp");
}
async loginvaliation(username, password) {
    await this.username.type(username);
    await this.password.type(password);
    await this.loginbutton.click();
}

}

module.exports={Loginpage};
