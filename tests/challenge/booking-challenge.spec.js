const { test, expect } = require("@playwright/test");

test.describe("Booking Challenge", () => {
  const BASE_URL = "https://restful-booker.herokuapp.com";
  let responsebody = null;
  let bookingId = null;

  test("Create booking - Challenge", async ({ request }) => {
    // Add your test steps here.


    // Assertions here
    expect(postRequest.ok).toBeTruthy();
    expect(postRequest.status()).toBe(200);

    // Extract data from JSON response
    responsebody = await postRequest.json();
    bookingId = responsebody.bookingid;
  });

  test("Get booking by ID - Challenge", async ({ request }) => {
    // Add your test steps here.
    

    // Assertions here
    expect(getRequest.status()).toBe(200);
    expect(await getRequest.json()).toMatchObject({
        firstname: 'firstnameHere',
        lastname: 'lastnameHere'
      });
  });
});