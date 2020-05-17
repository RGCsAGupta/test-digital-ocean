const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("respond with Hello Server World", (done) => {
	request(app).get("/").expect("Hello Server World", done);
  })
});