const express = require('express');

const router = express.Router();

const datetime = require('date-time');

const meetUps = [
  {
    id: 1,
    createdOn: '22/12/2018',
    location: 'DRC',
    image: 'C/mesImages/Bootcamp',
    topic: 'Andela Bootcamp',
    happenningOn: '2019-01-25',
    tags: 'Andela HomeStudy',
  },
  {
    id: 2,
    createdOn: '25/02/2018',
    location: 'Kigali',
    image: 'C/mesImages/Familly',
    topic: 'white party',
    happenningOn: '2017-05-19',
    tags: 'family first',
  },
  {
    id: 3,
    createdOn: '2/08/2016',
    location: 'Goma',
    image: 'C/mesImages/Beni',
    topic: 'DRC elections',
    happenningOn: '2019-08-09',
    tags: 'Beni people',
  },
];

router.get('/upcoming', (req, res, next) => {
  res.status(200).json({
    status: 200,
    data: [meetUps],
  });
  const current = datetime();
  const upcoming = [];

  // eslint-disable-next-line no-undef
  for (let i = 0; (c = meetUps.length), i < c; i++) {
    if (current < meetUps[i].happenningOn) {
      upcoming.push(meetUps[i]);
    }
  }
  res.send(upcoming);
});

// get requests for user
router.get('/', (req, res, next) => {
  res.status(200).json({
    status: 200,
    data: [meetUps],
  });
});
// get requests for user
router.get('/:id', (req, res, next) => {
  const meetUp = meetUps.find(c => c.id === parseInt(req.params.id, 10));
  if (!meetUp) {
    res.status(404).json({
      status: 404,
      error: 'ID not found',
    });
  } else {
    res.status(200).json({
      status: 200,
      data: [meetUp],
    });
  }
});

router.post('/:meetupId/rsvps', (req, res, next) => {
  const meet = meetUps.find(c => c.id === parseInt(req.params.meetupId, 10));
  if (!meet) {
    res.status(404).json({
      status: 404,
      error: 'the meetup with the given Id was not found',
    });
  } else if (!req.body.meetup || !req.body.topic) {
    res.status(400).json({
      status: 400,
      error: 'Topic and Meetup are required',
    });
  } else {
    const meetup = {
      // id: meetups.length +1,
      meetup: req.body.meetup,
      topic: req.body.topic,
      status: req.body.status,
    };
    meetUps.push(meetup);
    res.status(200).json({
      status: 200,
      data: [meetup],
    });
  }
});

router.post('/', (req, res, next) => {
  const meetUp = {
    id: meetUps.length + 1,
    topic: req.body.topic,
    location: req.body.location,
    happeningOn: req.body.happeningOn,
    Tags: req.body.body,
  };
  res.status(200).json({
    status: 200,
    data: meetUp,
  });

  meetUps.push(meetUp);
});

router.patch('/:meetUpId', (req, res, next) => {
  res.status(200).json({
    message: 'meetUp updated',
  });
});
router.delete('/:meetUpId', (req, res, next) => {
  res.status(200).json({
    message: 'meetUp deleted Method',
  });
});

module.exports = router;
