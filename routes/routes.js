var express = require('express');
var ifsc = require('./ifsc');
var router = express.Router();

/* GET home page. */
router.get('/routes', ifsc.addDataToDb);
router.get('/api/ifsc/:ifscCode', ifsc.findByIfscCode);
router.get('/api/micr/:micrCode', ifsc.findByMicrCode);
router.get('/api/bank/:bank', ifsc.findByBank);
router.get('/api/branch/:branch', ifsc.findByBranch);


/* POST home page. */
router.post('/api/ifsc', ifsc.findByIfscCode);
router.post('/api/micr', ifsc.findByMicrCode);
router.post('/api/bank', ifsc.findByBank);
router.post('/api/branch', ifsc.findByBranch);

module.exports = router;