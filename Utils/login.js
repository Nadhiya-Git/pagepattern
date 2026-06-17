import {test as base} from "@playwright/test";
import{Loginpage} from ("../PageObject/Loginpage");

const test=base.extend({

    Loginpage:async({page},use)=>{

        const loginpage=new Loginpage(page);
        await use(loginpage);

    }
})
