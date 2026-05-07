/*
Pageobjectmodule - is a design pattern where each webpage is represent as a separate class
and all locators + action are stored inside it improve reusability and maintenace
*/

export class LoginPage {
    constructor(page) {
        this.page = page
        this.username = page.locator("input[name='username']")
        this.password = page.locator("input[name='password']")
        this.loginbutton = page.locator("button[type='submit']")
    }
    async login(user, pass) {
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginbutton.click()
    }
}

