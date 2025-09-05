# Ravn Test Automation Live Challenge

The goal of this challenge is to showcase good practices in structuring Playwright tests:
- Keep locators and actions inside dedicated Page Object files.  
- Reuse shared functionality in a `BasePage`.  
- Keep tests clean and focused only on verifying behavior. 

## Installation

To get started with this project, follow the steps below to clone the repository and install the necessary dependencies.

### Clone the Repository

```bash
git clone https://github.com/your-username/ravn-test-automation-live-challenge.git
cd ravn-test-automation-live-challenge
```

### Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then, install the project dependencies using npm:

```bash
npm install
```

## Install Playwright

If you haven't, run the following command in order to install Playwright:

```bash
npx playwright install
```

## Project Structure
```
📂 RAVN-JS-TEST-AUTOMATION-CHALLENGE
 ┣ 📂 src
 ┃ ┣ 📂 pages        # Page Object Model files (BasePage, specific page classes)
 ┃ ┗ 📂 tests        # Test files that import and use the POM classes
 ┣ 📂 test-results       # Playwright test results and traces
 ┣ 📂 playwright-report  # HTML reports from Playwright
 ┣ 📄 playwright.config.js # Playwright configuration file
 ┣ 📄 package.json
 ┣ 📄 README.md
 ```


### Run All Tests

```bash
npx playwright test
```
### Run Specific Test File
To run a specific test suite, use the following command:

```bash
npx playwright test <file-name>
```

### Creating Your Own Script
This project intentionally does not include predefined test scripts in package.json.
As part of extending the framework, you are encouraged to create your own run scripts.