const { test, expect } = require("@playwright/test");

test.describe("Booking Challenge", () => {
  const BASE_URL = "https://restful-booker.herokuapp.com";
  let responsebody = null;
  let bookingId = null;

  test("Create booking - Solution", async ({ request }) => {
    // Add your test steps here.
    const postRequest = await request.post(`${BASE_URL}/booking`, {
      data: {
        firstname: 'Guillermo',
        lastname: 'Abrego',
        totalprice: 200,
        depositpaid: true,
        bookingdates: {
          checkin: '2024-01-01',
          checkout: '2024-01-05',
        },
        additionalneeds: 'Lots of wine',
      },
    });

    // Assertions here
    expect(postRequest.ok).toBeTruthy();
    expect(postRequest.status()).toBe(200);

    // Extract data from JSON response
    responsebody = await postRequest.json();
    bookingId = responsebody.bookingid;
  });

  test("Get booking by ID - Solution", async ({ request }) => {
    // Add your test steps here.
    const getRequest = await request.get(`${BASE_URL}/booking/${bookingId}`);

    // Assertions here
    expect(getRequest.status()).toBe(200);
    expect(await getRequest.json()).toMatchObject({
        firstname: 'Guillermo',
        lastname: 'Abrego'
      });
  });
});