const express = require('express');
const router = express.Router();
const db = require('../models');

const zip = require('zipcodes');

// GET api/v1/frostdates
router.get('/:zip', (req, res) => {
	let zipArr = zip.radius(req.params.zip, 10);
	db.frostdate.findAll({
		where: {
			zipcode: zipArr
		}
	}).then( arr => res.json(arr))
	.catch(err => res.send(err))
})





module.exports = router;