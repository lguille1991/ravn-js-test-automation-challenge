import { test, expect } from "@playwright/test";
import TestPomPage from "../pages/testPomPage";

test.describe("Write a test description here", () => {
  test.beforeEach(async ({ page }) => {
    // Add any setup steps here (e.g., navigate to base URL).
  });

  test.afterEach(async ({ page }) => {
    // Add any teardown steps here, if needed.
  });

  test("Write a test name", async ({ page }) => {
    const testPomPage = new TestPomPage(page);
    // Add your test steps here.
  });
});
