import test, { expect } from "@playwright/test";
import { karthikFam as fam } from "./objectLiterals";
test("Practice Test", async ({ page }) => {
    await page.goto('http://leaftaps.com/opentaps/control/main');
     await page.locator(`input`).first().fill("democsr2");
     await page.locator(`input`).nth(1).fill("crmsfa");
     await page.locator(`input`).last().click()
     console.log(fam[1].wife);

     const logoutbtn = page.getByRole('button',{ name: 'Logout'});
     expect(logoutbtn.textContent()).toContain

     await expect(logoutbtn).toBeVisible();
     logoutbtn.click();
     await expect(page).toHaveURL('https://leaftaps.com/opentaps/control/logout');
      
})