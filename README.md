# Ravn Test Automation Live Challenge

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

## Running Tests

This project includes custom scripts to run tests. You can use the following commands to execute the tests:

### Run All Tests

```bash
npx playwright test
```

### Run Specific Test File

To run a specific test suite, use the following command:

```bash
npx playwright test <file-name>
```

### You can also run a specific test making use of the custom scripts in **`package.json`**:

```bash
npm run all
npm run login-challenge
npm run bad-login-challenge
npm run place-order-challenge
```