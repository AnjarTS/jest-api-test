const supertest = require("supertest");

const baseUrl = "https://reqres.in/api";

describe("Feature: User", () => {
    it("Get list all user", async () => {
        //  1. Melakukan request get list user
        const res = await supertest(baseUrl).get('/users');

        // 2. Melakukan asersi: 1. Status code, 2. Response
        expect(res.status).toBe(200);
        // by default, page = 1 (kalau page tidak didefine, secara default page = 1)
        expect(res.body.page).toBe(1)
        // total > 1
    })
})