import { test, expect } from '@playwright/test';

test.describe('Navigate to the Swag Labs Login Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveTitle('Swag Labs');
    });

    test('Login using valid credentials - Challenge', async ({ page }) => {

        // Your test logic goes here
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator("//input[@data-test='login-button']").click();


        // You can modify this assetion or add more
        await expect(page).toHaveURL(/.*inventory/);
    });

    test('Login attempt using invalid credentials - Challenge', async ({ page }) => {

        // Your test logic goes here
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.getByRole('[data-test="password"]').fill('invalid');
        await page.locator("//input[@data-test='login-button']").click();


        // You can modify this assetion or add more
        await expect(page.getByText('Epic sadface')).toBeVisible();
    });

    test('Place an order - Challenge', async ({ page }) => {

        // Your test logic goes here
        // Log in
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.getByRole('textbox', { name: 'password' }).fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();

        // Select a item
        const items = page.locator('#inventory_container .inventory_item_name');
        const itemsCount = await items.count();

        console.log('Total elementos: ' + itemsCount);
        const randomIndex = Math.floor(Math.random() * itemsCount);
        console.log('random index: ' + randomIndex);

        const itemSelected = await items.nth(randomIndex);

        const productName = await itemSelected.innerText();
        console.log('Producto seleccionado: ' + productName);

        await itemSelected.click();

        //Add to cart the selected item
        await page.locator('button:has-text("Add to cart")').click();


        await page.locator('#shopping_cart_container').click();
        await page.getByText('Checkout').click();
        await page.getByText('Continue').click();

        // Fill form
        await page.locator('[data-test="firstName"]').fill('Juan');
        await page.locator('[data-test="lastName"]').fill('Perez');
        await page.locator('[data-test="postalCode"]').fill('12345');

        // Complete process
        await page.getByRole('button', { name: 'Continue' }).click();
        await page.getByRole('button', { name: 'Finish' }).click();

        // You can modify this assetion or add more
        await expect(page.getByText('THANK YOU FOR YOUR ORDER')).toBeVisible();
        await expect(page).toHaveURL(/.*checkout-complete/);
    });
});