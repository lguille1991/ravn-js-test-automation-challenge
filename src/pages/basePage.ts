import { Page, Locator } from "@playwright/test";

export class BasePage {
  readonly page: Page;
  readonly ravnLogo: Locator;
  readonly servicesOption: Locator;

  constructor(page: Page) {
    this.page = page;
    //Add locators here
    this.ravnLogo = page.locator('//div[@class="logo-container "]');
    this.servicesOption = page.getByText('services.');
  }

  //Add actions functions here
  async goToServices() {
    await this.servicesOption.click();
  }
}
