const request = require("supertest");
const app = require("./server.js");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
  test("It should response the GET data method", async () => {
    const response = await request(app).get("/retriveCachedData");
    expect(response.statusCode).toBe(200);
  });
});
