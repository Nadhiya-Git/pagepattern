class  Loginpage
{
    constructor(page){
this.page=page;
        this.username=page.locator('#userEmail'  ) ;
     this.password=page.locator('#userPassword');
    this.loginbutton=page.locator('#login');

    this.product=page.locator(".card-body").filter({hastesxt:"iphone 13 pro"});

    }


    async navigateToLoginPage(){

await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
}
async loginvaliation(username, password) {
    await this.username.type(username);
    await this.password.type(password);
    await this.loginbutton.click();

  const tiles=  await this.product.textcontents();
    console.log(tiles);
    for(let i=0;i<titles.length;i++){
      if (await products.nth(i).locator("b").textContent() === "ZARA COAT 3") {
            {
            await this.page.nth(i).locator("text='Add To Cart'").click();
        }}

        
    }

}

}

module.exports={Loginpage};
