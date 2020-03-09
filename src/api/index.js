const { Router } = require('express');
const bodyParser = require('body-parser');

const freelancerType = require('./freelancer-type').router;
const job = require('./job').router;
const router = Router();

router.use(bodyParser.json({limit: '10mb'}));

router.use('/job', job);
router.use('/freelancer-type', freelancerType);


exports.router = router;