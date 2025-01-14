import { test, expect } from '@playwright/test';

test.describe('Navigate to the Swag Labs Login Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveTitle('Swag Labs');
    });

    test('Login using valid credentials - Solution', async ({ page }) => {
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByText('Login').click();
        await expect(page.getByText('Products')).toBeVisible();
    });

    test('Login using invalid credentials - Solution', async ({ page }) => {
        await page.getByPlaceholder('Username').fill('locked_out_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByText('Login').click();
        await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
    });

    test('Complete purchase - Solution', async ({ page }) => {
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByText('Login').click();
        await page.getByText('Sauce Labs Bike Light').click();
        await page.getByText('Add to cart').click();
        await page.locator('//div[@id="shopping_cart_container"]').click();
        await page.getByText('Checkout').click();
        await page.getByText('Continue').click();
        await page.getByPlaceholder('First Name').fill('John');
        await page.getByPlaceholder('Last Name').fill('Doe');
        await page.getByPlaceholder('Zip/Postal Code').fill('12345');
        await page.getByText('Continue').click();
        await page.getByText('Finish').click();
        await expect(page.getByText('THANK YOU FOR YOUR ORDER')).toBeVisible
    });
});