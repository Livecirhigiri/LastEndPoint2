/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */

const assert = require("chai").assert;
const request = require("supertest");
const app = require("../app");

describe("send All meetups", () => {
  it("send All Meetups", (done) => {
    request(app)
      .get("/meetUp")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("Upcoming meetups", () => {
  it("Upcoming Meetups", (done) => {
    request(app)
      .get("/meetUp/upcoming")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
describe("Find meetup by his ID", () => {
  it("Get a meetup by ID", (done) => {
    request(app)
      .get("/meetup/2")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
