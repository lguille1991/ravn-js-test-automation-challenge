import { test, expect } from "@playwright/test";

test.describe("Right a test description here", () => {
  const BASE_URL = "https://TestingURLHere";

  test.beforeEach(async ({ page }) => {
    // Add any setup steps here, if needed.
    // For example, you might want to set up authentication headers or other configurations.
  });

  test.afterEach(async ({ page }) => {
    // Add any teardown steps here, if needed.
    // For example, you might want to clean up any data created during the tests.
  });
  

  test("Right a test name", async ({ page }) => {
    // Add your test steps here.
    
  });

  
  });
