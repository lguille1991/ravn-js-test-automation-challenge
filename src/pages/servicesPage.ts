import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

class ServicesPage extends BasePage {
  
  readonly qualityAssuranceSubtext: Locator;
  readonly testingTypesLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.qualityAssuranceSubtext = page.locator('//h3[text()="Quality Assurance"]/following-sibling::p');
    this.testingTypesLocator = page.locator('//h3[text()="Quality Assurance"]/parent::div/following-sibling::div/p');
  }

  async getTestingTypes(): Promise<Locator[]> {
    return await this.testingTypesLocator.all();
  }

  async getTestingTypesText(): Promise<string[]> {
    const testingTypes = await this.getTestingTypes();
    const testingTypeTexts: string[] = [];
    for (const element of testingTypes) {
      const text = await element.innerText();
      testingTypeTexts.push(text.trim());
    }
    return testingTypeTexts;
  }
  //Add actions functions here
}

export default ServicesPage;
