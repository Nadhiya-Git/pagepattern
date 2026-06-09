class  Loginpage
{
    constructor(page){
this.page=page;
        this.username=page.locator('#userEmail'  ) ;
     this.password=page.locator('#userPassword');
    this.loginbutton=page.locator('#login');

    this.products = page.locator('.card-body');

    }


    async navigateToLoginPage(){
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    }

    async loginvaliation(username, password) {
        await this.username.type(username);
        await this.password.type(password);
        await this.loginbutton.click();

        const titles = await this.products.locator('b').allTextContents();
        console.log(titles);
        for (let i = 0; i < titles.length; i++) {
            if (titles[i].trim() === 'ZARA COAT 3') {
                await this.products.nth(i).locator("text='Add To Cart'").click();
                break;
            }
        }
    }

}

module.exports={Loginpage};
