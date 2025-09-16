import { test, expect, Locator } from "@playwright/test";
import ServicesPage from "../pages/servicesPage";
import { BasePage } from "../pages/basePage";

test.describe("Right a test description here", () => {
  const BASE_URL = "https://www.ravn.co/";

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test.afterEach(async ({ page }) => {
    // Add any teardown steps here, if needed.
    // For example, you might want to clean up any data created during the tests.
  });
  

  test("Right a test name", async ({ page }) => {
    const basePage = new BasePage(page);
    const servicesPage = new ServicesPage(page);
    // Add your test steps here.
    await basePage.goToServices();
    await expect(page).toHaveURL(/services?\//);;
    await expect(servicesPage.qualityAssuranceSubtext).toBeVisible();
    const testingTypeTexts: string[] = await servicesPage.getTestingTypesText();
    console.log("Testing Types:", testingTypeTexts);
    expect(testingTypeTexts).toEqual([
      "QA Automation",
      "Manual QA",
      "API Testing",
      "Regression Testing",
      "Performance Testing"
    ]);
  });

});
