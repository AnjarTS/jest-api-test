const supertest = require("supertest");

const baseUrl = "https://bookstore.toolsqa.com";
const userName = "coba" + new Date().getUTCMilliseconds()
const password = "P@ssw0rd"

let token

describe("Feature: Account", () => {
  it("Create new user", async () => {
    const headers = {
      "Content-Type": "application/json",
      "accept": "application/json",
    };

    const body = {
      userName: userName,
      password: password,
    };

    const res = await supertest(baseUrl)
      .post("/Account/v1/User")
      .set(headers)
      .send(body);

    console.log(res.body);

    expect(res.status).toBe(201);
    expect(res.body.userId).not.toBe(null);
  });

  it("Login as valid user", async () => {
    const headers = {
      "Content-Type": "application/json",
      "accept": "application/json",
    };

    const body = {
        userName: userName,
        password: password,
      };

    const res = await supertest(baseUrl)
      .post("/Account/v1/GenerateToken")
      .set(headers)
      .send(body);

      console.log(res.body)
      token = res.body.token

      expect(res.status).toBe(200)
      expect(res.body.token).not.toBe(null)
  });
});
