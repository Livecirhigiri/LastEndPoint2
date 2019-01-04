const express = require("express");

const router = express.Router();
const rsvps = [
  {
    id: 1,
    meetup: 1,
    user: 1,
    response: "yes",
  },
  {
    id: 2,
    meetup: 2,
    user: 2,
    response: "not sure",
  },
  {
    id: 3,
    meetup: 3,
    user: 3,
    response: "no",
  },
];

router.get("/", (req, res, next) => {
  res.status(200).json({
    status: 200,
    data: [rsvps],
  });
});

router.get("/:id", (req, res, next) => {
  const rsvp = rsvps.find(c => c.id === parseInt(req.params.id, 10));
  if (!rsvp) {
    res.status(404).json({
      status: 404,
      error: "the rsvp with the given ID was not found",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: [rsvp],
    });
  }
});

router.post("/:rsvpId", (req, res, next) => {
  const id = req.params.rsvpId;
  if (id === "special") {
    res.status(200).json({
      message: "here is the special ID",
      id,
    });
  } else {
    res.status(200).json({
      message: "an ID is passed here",
    });
  }
});
// commit this
router.patch("/:id", (req, res, next) => {
  res.status(200).json({
    message: "rsvp updated",
  });
});
router.delete("/:rsvpId", (req, res, next) => {
  res.status(200).json({
    message: "rsvp deleted Method",
  });
});



module.exports = router;
