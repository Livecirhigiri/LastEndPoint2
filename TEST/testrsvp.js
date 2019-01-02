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
