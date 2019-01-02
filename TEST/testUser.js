/* eslint-disable consistent-return */
/* eslint-disable no-undef */
// eslint-disable-next-line
const assert = require("chai").assert;
const request = require("supertest");
const app = require("../app");

describe("get request for user ", () => {
  it("display all users ", (done) => {
    request(app)
      .get("/user")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
describe("Find a specific user", () => {
  it("Get a specific user", (done) => {
    request(app)
      .get("/user/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
