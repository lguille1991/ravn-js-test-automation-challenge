import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

class TestPomPage extends BasePage {
  constructor(page: Page) {
    super(page);
    // Add page-specific locators here
  }

  // Add page-specific action functions here
}

export default TestPomPage;
