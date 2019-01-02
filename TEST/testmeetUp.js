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
describe("Post a meetup to be attend", () => {
  const meetUp = {
    id: 4,
    topic: "resolving conflits",
    loaction: "convetion center",
    happeningOn: "2019-04-23",
    Tags: "UE pres.",
  };
  it("Create a meetup", (done) => {
    request(app)
      .post("/meetUp")
      .send(meetUp)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("Respond to a meetup Rsvp", () => {
  const rsvp = {
    meetup: 1,
    topic: "Machine learnings",
    status: "maybe",
  };
  it("Create a meetup", (done) => {
    request(app)
      .post("/meetups/1/rsvps")
      .send(rsvp)
      .set("Accept", "application/json")
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
