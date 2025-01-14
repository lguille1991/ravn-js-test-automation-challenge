import { test, expect } from '@playwright/test';

test.describe('Navigate to the Swag Labs Login Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveTitle('Swag Labs');
    });

    test('Login using valid credentials - Challenge', async ({ page }) => {
        
    });

    test('Login attempt using invalid credentials - Challenge', async ({ page }) => {
        
    });

    test('Place an order - Challenge', async ({ page }) => {
        
    });
});