import { test, expect } from "@playwright/test";
import ContactPage from "../pages/contactPage";

test("contact: empty submit validates; valid data makes form submittable", async ({ page }) => {
    const contact = new ContactPage(page);
    await contact.goto();

    // submit vacío → validación
    await contact.clickSubmit();

    const fields = [
        contact.firstName,
        contact.lastName,
        contact.email,
        contact.company,
        contact.help,
        contact.budget,
    ];

    const states = await Promise.all(fields.map(f => contact.valid(f)));
    expect(states.some(v => v === false)).toBeTruthy();

    // llenar válido → submittable (sin enviar)
    await contact.fillValid();
    await expect.poll(() => contact.isSubmittable()).toBe(true);
});
