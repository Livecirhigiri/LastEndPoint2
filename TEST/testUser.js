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

describe("Specific user not found", () => {
  const error = {
    status: 404,
    error: "the user with the given ID was not found"
  };
  it("Given user Id not found", (done) => {
    request(app)
      .get("/user/13")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404)
      .expect(error)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
