import { test, expect } from '@playwright/test';

test.describe('Navigate to the Swag Labs Login Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveTitle('Swag Labs');
    });

    test('Login using valid credentials - Challenge', async ({ page }) => {

        // Your test logic goes here
        

        // You can modify this assetion or add more
        await expect(page).toHaveURL(/.*inventory/);
    });

    test('Login attempt using invalid credentials - Challenge', async ({ page }) => {

        // Your test logic goes here
        

        // You can modify this assetion or add more
        await expect(page.getByText('Epic sadface')).toBeVisible();
    });

    test('Place an order - Challenge', async ({ page }) => {

        // Your test logic goes here
        

        // You can modify this assetion or add more
        await expect(page.getByText('THANK YOU FOR YOUR ORDER')).toBeVisible();
        await expect(page).toHaveURL(/.*checkout-complete/);
    });
});