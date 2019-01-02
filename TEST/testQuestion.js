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

describe("in case you dont found your question", () => {
  const error = {
    status: 404,
    error: "the question with the given ID was not found",
  };
  it("Given question Id not found", (done) => {
    request(app)
      .get("/Question/13")
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

describe("Post a question", () => {
  const Question = {
    id: 2,
    user: 2,
    meetup: 3,
    tittle: "resolving conflits",
    body: "how to recreate peace in",
  };
  it("Create a question", (done) => {
    request(app)
      .post("/Question")
      .send(Question)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("post request to Upvote question", () => {
    {
        let size = parseInt(req.params.id, 10);
    size -= 1;
    let upVote = Questions[size].votes;
    upVote++;
    Questions[size].votes = upVote;
    res.status(200).json({
      status: 200,
      data: [Question],
    }
   }
  it("increment user votes", (done) => {
    request(app)
      .patch("/Question/1/upvote")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .except(404)
      .expect(error);
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
