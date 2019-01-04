/* eslint-disable consistent-return */
/* eslint-disable no-undef */
// eslint-disable-next-line
const assert = require("chai").assert;
const request = require("supertest");
const app = require("../app");

describe("send rsvp ", () => {
  it("send All rsvp ", (done) => {
    request(app)
      .get("/rsvp")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
describe("Find rsvp by his ID", () => {
  it("Get a specific rsvp", (done) => {
    request(app)
      .get("/rsvp/2")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
describe("Specific rsvp not found", () => {
  const error = {
    status: 404,
    error: "the rsvp with the given ID was not found",
  };
  it("Given rsvp Id not found", (done) => {
    request(app)
      .get("/rsvp/20")
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
