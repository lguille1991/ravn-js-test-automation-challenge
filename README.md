# Ravn Test Automation Challenge

A TypeScript-based Playwright test automation framework showcasing good practices in structuring end-to-end tests:
- **Page Object Model (POM)**: Keep locators and actions inside dedicated Page Object files
- **Base Page Pattern**: Reuse shared functionality in a `BasePage` class
- **Clean Tests**: Keep tests focused only on verifying behavior
- **TypeScript**: Full type safety and better IDE support

## Prerequisites

- **Node.js**: Version 18+ recommended ([Download Node.js](https://nodejs.org/))
- **npm**: Comes with Node.js

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/lguille1991/ravn-js-test-automation-challenge.git
cd ravn-js-test-automation-challenge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

## Project Structure

```
📂 ravn-js-test-automation-challenge
 ┣ 📂 src
 ┃ ┣ 📂 pages           # Page Object Model files (.ts)
 ┃ ┃ ┣ 📄 basePage.ts   # Base page with common functionality
 ┃ ┃ ┗ 📄 servicesPage.ts # Services page specific actions
 ┃ ┣ 📂 selectors       # Reusable selectors (if any)
 ┃ ┗ 📂 tests           # Test files (.spec.ts)
 ┃   ┗ 📄 qaServices.spec.ts
 ┣ 📂 test-results      # Playwright test results and traces
 ┣ 📂 playwright-report # HTML reports from Playwright
 ┣ 📄 playwright.config.ts # Playwright configuration
 ┣ 📄 tsconfig.json     # TypeScript configuration
 ┣ 📄 package.json      # Dependencies and scripts
 ┗ 📄 README.md
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:headed` | Run tests with browser UI visible |
| `npm run test:ui` | Run tests with Playwright UI mode |
| `npm run type-check` | Check TypeScript types without running tests |
| `npm run report` | Open the last HTML test report |

## Running Tests

### Run All Tests
```bash
npm test
# or
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test qaServices.spec.ts
```

### Run Tests with Browser Visible
```bash
npm run test:headed
```

### Run Tests in UI Mode (Interactive)
```bash
npm run test:ui
```

### Check TypeScript Types
```bash
npm run type-check
```

## Development

### TypeScript Support
This project is built with TypeScript for better type safety and developer experience. All page objects and tests are written in TypeScript (`.ts` files).

### Adding New Tests
1. Create new test files in `src/tests/` with `.spec.ts` extension
2. Create corresponding page objects in `src/pages/` with `.ts` extension
3. Import and extend `BasePage` for common functionality

### Example Test Structure
```typescript
import { test, expect } from "@playwright/test";
import ServicesPage from "../pages/servicesPage";

test.describe("Services Page Tests", () => {
  test("should verify quality assurance services", async ({ page }) => {
    const servicesPage = new ServicesPage(page);
    
    await page.goto("https://www.ravn.co/services");
    const testingTypes = await servicesPage.getTestingTypesText();
    
    expect(testingTypes).toContain("QA Automation");
  });
});
```

## Reports

After running tests, you can view detailed reports:

```bash
npm run report
```

This opens an HTML report with test results, screenshots, and traces for failed tests.

## Troubleshooting

### TypeScript Errors
If you encounter TypeScript compilation errors:
```bash
npm run type-check
```

### Playwright Browser Issues
If tests fail due to browser issues:
```bash
npx playwright install --force
```

### Clear Previous Test Results
```bash
rm -rf test-results/ playwright-report/
```