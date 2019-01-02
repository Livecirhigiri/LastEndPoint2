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

describe("give your position about meetUp to attend", () => {
  const rsvp = {
    meetup: 1,
    topic: "resovilng conflits ",
    status: "yes",
  };
  it("post a meetup", (done) => {
    request(app)
      .post("/meetups/1/rsvps")
      .send(rsvp)
      .set("Accept", "application/json")
      .expect(404)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

describe("Delete a meetUp", () => {
  it("Deleted question for a meetup", (done) => {
    request(app)
      .delete("/meetup/2")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("uncommon happen", () => {
  describe("in case you dont found a specific meetUp", () => {
    const error = {
        status: 404,
        error: "ID not found",
    };
    it("Given meetup Id not found", (done) => {
      request(app)
        .get("/meetup/20")
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
});

describe("in case the meetup you want to attend unexsist", () => {
  const error = {
    status: 404,
    error: "the meetup with the given Id was not found",
  };
  it("Given meetup Id not found", (done) => {
    request(app)
      .post("/meetup/20/rsvps")
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

describe('in case you want to delete an existing meetup', ()  => {
    const error = {
        status: 404,
        error: "the meetup with the given Id was not found",
    };
    it("no meetUp with this ID to be deleted", (done) => {
         
        .post("/meetUp/45")
        .set("Accept"; "application/json")
        .expect("content-Type", /json/)
        .expect(404)
        .expect(error)
        .end((err) => {
            if(err) return done(err);
            done();
        }):
    });
});
