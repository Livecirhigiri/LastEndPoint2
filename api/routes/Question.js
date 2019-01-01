/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const express = require("express");

const router = express.Router();

const Questions = [
  {
    id: 1,
    createOn: "22/08/2014",
    createdBy: "Olivia",
    meetup: 1,
    tittle: "machine learning",
    body: "Network security",
    votes: 23,
  },

  {
    id: 2,
    createOn: "12/08/2017",
    createdBy: "Pascal",
    meetup: 2,
    tittle: "english learning",
    body: "improve your speaking",
    votes: 37,
  },
];
router.get("/", (req, res, next) => {
  res.status(200).json({
    status: 200,
    data: Questions,
  });
});

router.get("/:id", (req, res, next) => {
  const Question = Questions.find(c => c.id === parseInt(req.params.id, 10));
  if (!Question) {
    res.status(404).json({
      status: 404,
      error: "the course with the given ID was not found",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: [Question],
    });
  }
});

router.post("/", (req, res, next) => {
  const Question = {
    id: Questions.length + 1,
    user: req.body.user,
    meetup: req.body.meetup,
    tittle: req.body.tittle,
    body: req.body.body,
  };
  res.status(200).json({
    status: 200,
    data: [Question],
  });
  meetUps.push(Question);
  Questions.push(Question);
});

router.patch("/:id/upvote", (req, res, next) => {
  const Question = Questions.find(c => c.id === parseInt(req.params.id, 10));
  if (!Question) {
    res.status(404).send("the course with the given ID was not found");
  } else {
    let size = parseInt(req.params.id, 10);
    size -= 1;
    let upVote = Questions[size].votes;
    upVote++;
    Questions[size].votes = upVote;
    res.status(200).json({
      status: 200,
      data: [Question],
    });
  }
});

router.patch("/:id/downvote", (req, res, next) => {
  const Question = Questions.find(c => c.id === parseInt(req.params.id, 10));
  if (!Question) {
    res.status(404).send("the course with the given ID was not found");
  } else {
    let size = parseInt(req.params.id, 10);
    size -= 1;
    let downvote = Questions[size].votes;
    // eslint-disable-next-line no-plusplus
    downvote--;
    Questions[size].votes = downvote;
    res.status(200).json({
      status: 200,
      data: [Question],
    });
  }
});

router.delete("/:QuestionId", (req, res, next) => {
  res.status(200).json({});
});

module.exports = router;
