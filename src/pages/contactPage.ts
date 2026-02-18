import { Locator, Page } from "@playwright/test";

export default class ContactPage {
    readonly form: Locator;

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly company: Locator;
    readonly help: Locator;
    readonly budget: Locator;
    readonly submit: Locator;

    constructor(private readonly page: Page) {
        this.form = page.locator("form").first();

        this.firstName = this.form.locator('input[name*="first" i]');
        this.lastName = this.form.locator('input[name*="last" i]');
        this.email = this.form.locator('input[type="email"]');
        this.company = this.form.locator('input[name*="company" i]');

        this.help = this.form.locator("select").nth(0);
        this.budget = this.form.locator("select").nth(1);

        this.submit = this.form.locator('button[type="submit"], input[type="submit"]');
    }

    async goto() {
        await this.page.goto("https://www.ravn.co/contact/");
        await this.submit.waitFor();
    }

    async clickSubmit() {
        await this.submit.click();
    }

    async fillValid() {
        await this.firstName.fill("Mate");
        await this.lastName.fill("Test");
        await this.email.fill("mate.test@company.com");
        await this.company.fill("ACME Inc");

        await this.help.selectOption({ index: 1 });
        await this.budget.selectOption({ index: 1 });
    }

    async valid(field: Locator): Promise<boolean> {
        return field.evaluate(el =>
            (el as HTMLInputElement | HTMLSelectElement).checkValidity()
        );
    }

    async isSubmittable(): Promise<boolean> {
        const fields = [
            this.firstName,
            this.lastName,
            this.email,
            this.company,
            this.help,
            this.budget,
        ];

        for (const f of fields) {
            if (!(await this.valid(f))) return false;
        }

        return !(await this.submit.isDisabled());
    }
}
