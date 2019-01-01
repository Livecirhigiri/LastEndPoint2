const express = require("express");
const router = express.Router();
const users = [
  {
    id: 1,
    firstname: "Willy",
    lastname: "Akilimali",
    othrname: "Booba",
    email: "willycirh@gmail.com",
    phoneNumber: "884503457",
    username: "willyAk",
    registered: 12 / 4 / 2013,
    isAdmin: true
  },
  {
    id: 2,
    firstname: "marie",
    lastname: "iragi",
    othrname: "louise",
    email: "marcirh@gmail.com",
    phoneNumber: "8845043257",
    username: "marieLoui",
    registered: 2 / 04 / 2016,
    isAdmin: false
  },
  {
    id: 3,
    firstname: "Gloire",
    lastname: "Bahogw",
    othrname: "Bugati",
    email: "gloireBah@gmail.com",
    phoneNumber: "88498057",
    username: "gloireBah",
    registered: 22 / 04 / 2018,
    isAdmin: false
  }
];

router.get("/", (req, res, next) => {
  res.status(200).json({
    status: 200,
    data: users
  });
});

router.get("/:id", (req, res, next) => {
  const user = users.find(c => c.id === parseInt(req.params.id));
  if (!user) {
    res.status(404).json({
      status: 404,
      error: "the user with the given ID was not found"
    });
  } else {
    res.status(200).json({
      status: 200,
      data: [user]
    });
  }
});
router.post("/", (req, res, next) => {
  const Question = {
    id: Questions.length + 1,
    name: req.body.name,
    meetup: req.body.meetup,
    Question: req.body.Question,
    body: req.body.body
  };
  res.status(200).json({
    status: 200,
    data: [user]
  });

  users.push(user);
});

router.post("/:userId", (req, res, next) => {
  const id = req.params.userId;
  if (id === "special") {
    res.status(200).json({
      message: "here is the special ID",
      id: id
    });
  } else {
    res.status(200).json({
      message: "an ID is passed here"
    });
  }
});

router.patch("/:userId", (req, res, next) => {
  res.status(200).json({
    message: "User updated"
  });
});
router.delete("/:userId", (req, res, next) => {
  res.status(200).json({
    message: "User deleted Method"
  });
});

module.exports = router;
