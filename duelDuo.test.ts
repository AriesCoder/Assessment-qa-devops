
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('"See All Bots" button shows up when page loads', async()=>{
    const allBotsBtn = await driver.findElement(By.id('see-all'))
    const visible = await allBotsBtn.isDisplayed()
    expect(visible).toBe(true)

})

test("header 'Choose 2!' should be hidden when page loads", async ()=>{
    const header = await driver.findElement(By.id("choose-header"))
    expect(await header.getAttribute("class")).toBe("hide")
})

test("'draw' button should be hidden after clicked ", async ()=>{
    const drawBtn = await driver.findElement(By.xpath("//button[@id='draw']"))
    await drawBtn.click()
    await driver.sleep(1000)
    expect(await drawBtn.getAttribute("class")).toBe("hide")
})

test("header 'Choose 2!' should be displayed after click 'draw", async ()=>{
    const drawBtn = await driver.findElement(By.xpath("//button[@id='draw']"))
    const header = await driver.findElement(By.id("choose-header"))
    await drawBtn.click()
    await driver.sleep(1000)
    expect(await header.getAttribute("class")).not.toBe("hide")
})