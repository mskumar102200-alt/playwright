import {test, expect} from '@playwright/test'
import { waitForDebugger } from 'node:inspector'

test('ornage', async({browser})=>{
   const context = await browser.newContext({
    recordVideo:{dir:'videos/'}
    })

    const page = await context.newPage()

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const username = await page.locator("//input[@name='username']")
    await username.fill("Admin")

    const password = await page.locator("//input[@name='password']")
    await password.fill("admin123")

    const login = await page.locator("//button[@type='submit']")
    await login.click()

    await page.screenshot({path:'fullpage1.png',fullPage:true})

    await page.waitForTimeout(2000)

    await page.screenshot({path:'fullpage2.png',fullPage:true})

    const admin = await page.locator("//span[text()='Admin']").click()

    const user = await page.locator("//label[text()='Username']/following::input[1]")
    await user.fill("Admin")

    const role = await page.locator("//label[text()='User Role']/following::div[contains(@class,'oxd-select-text')][1]").click()
    await page.locator("//div[@role='listbox']//span[text()='Admin']").click();

    const name = await page.locator("//input[@placeholder='Type for hints...']")
    await name.fill("manda user")

    const status = await page.locator("//label[text()='Status']/following::div[contains(@class,'oxd-select-text')][1]").click()
    await page.locator("//div[@role='listbox']//span[text()='Enabled']").click();

    const Search = await page.locator("//button[text()=' Search ']")
    await Search.click()

    const reset = await page.locator("//button[text()=' Reset ']")
    await reset.click()

    const job = await page.locator("//span[text()='Job ']").click()
    await page.waitForTimeout(2000)
    
    const jobtitle = await page.locator("//a[text()='Job Titles']").click()

    const add = await page.locator("//button[text()=' Add ']").click()

    const jobtitletext = await page.locator("//label[text()='Job Title']/following::input[contains(@class,'oxd-input oxd-input--active')]")
    await jobtitletext.fill("Network Communication Engineer")

    const desc = await page.locator("//textarea[@placeholder='Type description here']")
    await desc.fill("WORKING AS PROJECT ENGINEER")

    const save = await page.locator("//button[text()=' Save ']")
    await save.click()

    await page.screenshot({path:'fullpage3.png',fullPage:true})

    const qualification = await page.locator("//span[text()='Qualifications ']").click()
    const skills = await page.locator("//a[text()='Skills']").click()

    const button = await page.locator("//button[text()=' Add ']").click()

    const skillname = await page.locator("//label[text()='Name']/following::input[contains(@class,'oxd-input oxd-input--active')]")
    await skillname.fill("Network Communication Engineer")

    const descrip = await page.locator("[placeholder='Type description here']")
    await descrip.fill("I am working as NOC Engineer")

    const save1 = await page.locator("//button[text()=' Save ']")
    await save1.click()

    await page.screenshot({path:'fullpage4.png',fullPage:true})

    const national = await page.locator("//a[text()='Nationalities']").click()

    const addnation = await page.locator("//button[text()=' Add ']").click()

    const nationname = await page.locator("//h6[text()='Add Nationality']/following::input[contains(@class,'oxd-input oxd-input--active')]")
    await nationname.fill("Indian")

    const nationsave = await page.locator("//button[text()=' Save ']")
    await nationsave.click()

    const config = await page.locator("//span[text()='Configuration ']").click()

    const email = await page.locator("//a[text()='Language Packages']").click()

    const addlanguage = await page.locator("//button[text()=' Add ']").click()

    const selectlanguage = await page.locator("//div[text()='-- Select --']").click()

    const Language1 = await page.locator("//span[text()='Tamil (Singapore) - தமிழ் (சிங்கப்பூர்)']").click()

    const savelanguage = await page.locator("//button[text()=' Save ']").click()

    await page.screenshot({path:'fullpage6.png',fullPage:true})
    
    const orgnization = await page.locator("//span[text()='Organization ']").click()

    const location = await page.locator("//a[text()='Locations']").click()

    const locationname = await page.locator("//label[text()='Name']/following::input[contains(@class,'oxd-input oxd-input--active')][1]")
    await locationname.fill("Selvakumar")

    const city = await page.locator("//label[text()='City']/following::input[contains(@class,'oxd-input oxd-input--active')][1]")
    await city.fill("Chennai")

    const country = await page.locator("//label[text()='Country']/following::div[contains(text(),'-- Select --')]").click()
    const select = await page.locator('//div[@role="listbox"]//span[text()="India"]').click()

    const countrySearch = await page.locator('//button[text()=" Search "]').click()

    await page.screenshot({path:'fullpage5.png',fullPage:true})

   console.log("Country selected successfully")

   console.log("Admin Status Over")
 
})
