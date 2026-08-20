import{test,chromium} from "@playwright/test";
test('should launch browser',async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.amazon.in/');
    page.url();
    console.log(page.url());
    await page.waitForTimeout(5000);
})