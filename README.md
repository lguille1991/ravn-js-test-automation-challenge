# Ravn Test Automation Challenge

A TypeScript-based Playwright test automation framework showcasing good practices in structuring end-to-end tests:
- **Page Object Model (POM)**: Keep locators and actions inside dedicated Page Object files
- **Base Page Pattern**: Reuse shared functionality in a `BasePage` class
- **Clean Tests**: Keep tests focused only on verifying behavior
- **TypeScript**: Full type safety and better IDE support

## Live QA Automation Challenge (45 Minutes)

This repo can be used as a live interview exercise for QA Automation Engineer candidates. The goal is to validate testing fundamentals and the ability to implement a small, maintainable Playwright test within a short timebox.

### Timebox

| Section | Minutes |
|---------|---------|
| Setup | 5 |
| Fundamentals Q&A | 10 |
| Automation Implementation | 25 |
| Review / Debrief | 5 |

### Part A: Automation Implementation (25 minutes)

**Task**
- Implement one Playwright test using the provided skeleton.
- Keep tests focused and readable.
- Avoid hard sleeps.
- Use stable, intent-driven selectors.

**Provided Skeleton**

The repo ships with an empty Page Object Model scaffold the candidate must fill in:

- `src/pages/basePage.ts` — `BasePage` class with shared `page` reference. Add shared locators / actions here.
- `src/pages/testPomPage.ts` — `TestPomPage` extends `BasePage`. Add page-specific locators and action methods here.
- `src/tests/test.spec.ts` — empty spec file wired to `TestPomPage`. Add the `describe` text, test name, and steps here.

**Suggested Implementation**

1. Open `src/tests/test.spec.ts` and define the test description and test name.
2. Navigate to `https://www.ravn.co/services` from `beforeEach`.
3. Add locators and a method in `src/pages/testPomPage.ts` to retrieve the testing offerings text.
4. Assert that at least two expected offerings are present.
5. Ensure the test passes consistently.

**Optional Stretch (if time remains)**
- Add a negative/edge check (e.g., the list is not empty).
- Add a small helper in `src/pages/basePage.ts` if it improves reuse.

### Part B: Review / Debrief (5 minutes)

Ask the candidate to explain:
1. Why they chose those selectors.
2. How they would make the test more robust.
3. What they would do if the test became flaky in CI.

### Evaluation Rubric (Quick Score 1–5 each)

1. Test fundamentals
2. Playwright syntax and API usage
3. Code quality and readability
4. Reliability (stable selectors, no hard sleeps)
5. Communication and tradeoff reasoning

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
 ┃ ┣ 📂 pages              # Page Object Model files (.ts)
 ┃ ┃ ┣ 📄 basePage.ts      # Base page — shared locators / actions
 ┃ ┃ ┗ 📄 testPomPage.ts   # Extends BasePage — page-specific locators / actions
 ┃ ┗ 📂 tests              # Test files (.spec.ts)
 ┃   ┗ 📄 test.spec.ts     # Spec scaffold wired to TestPomPage
 ┣ 📄 playwright.config.ts # Playwright configuration
 ┣ 📄 tsconfig.json        # TypeScript configuration
 ┣ 📄 package.json         # Dependencies and scripts
 ┗ 📄 README.md
```

The skeleton wiring is: `test.spec.ts` → `TestPomPage` → `BasePage`.

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
npx playwright test test.spec.ts
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
import TestPomPage from "../pages/testPomPage";

test.describe("Write a test description here", () => {
  test.beforeEach(async ({ page }) => {
    // Setup (e.g., await page.goto("https://www.ravn.co/services"))
  });

  test("Write a test name", async ({ page }) => {
    const testPomPage = new TestPomPage(page);
    // Add your test steps here.
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
