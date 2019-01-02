const assert = require("chai").assert;
const request = require("supertest");
const app = require("../app");

describe("Testing question with get request", () => {
  describe("display all questions", () => {
    it("All Questions", (done) => {
      request(app)
        .get("/Question")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
  });
});

describe("define question to be found", () => {
  it("Get a specific question", (done) => {
    request(app)
      .get("/Question/2")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
