const supertest = require("supertest");

const baseUrl = "https://restful-booker.herokuapp.com";

describe("Feature: Create Token", () => {
  let id;
  it("Create booking with valid parameters", async () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": "PostmanRuntime/7.35.0",
    };

    const body = {
      firstname: "Yovi",
      lastname: "Riszan",
      totalprice: "10",
      depositpaid: "true",
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2018-01-31",
      },
      additionalneeds: "Breakfast",
    };

    const res = await supertest(baseUrl)
      .post("/booking")
      .set(headers)
      .send(body);
    console.log(res.body.bookingid);

    id = res.body.bookingid;

    // Assertions
    expect(res.status).toBe(200);
    expect(res.body.token).not.toBe(null);

    const headers2 = {
      Accept: "application/json",
    };

    const check = await supertest(baseUrl)
      .get("/booking/" + res.body.bookingid)
      .set(headers2);

    console.log(check.body);
    expect(check.status).toBe(200)
  });
  
  it.skip("Create token without username", async () => {
    const headers = {
      Accept: "application/json",
    };

    const res = await supertest("https://restful-booker.herokuapp.com")
      .get("/booking/164")
      .set(headers);

    console.log("Status Code:", res.status);
    console.log("Response Body:", res.body);
  });

  // it('Create token without password', () => {})
});
