const express = require('express');
const router = express.Router();
const db = require('../models');

const zip = require('zipcodes');

// GET api/v1/frostdates
router.get('/:zip', (req, res) => {
	let zipArr = zip.radius(req.params.zip, 10);
	zipArr.unshift(req.params.zip);
	db.frostdate.findAll({
		where: {
			zipcode: zipArr
		}
	}).then( arr => {
		arr.sort( (a,b) => {
			return Number(a.zipcode) - Number(b.zipcode);
		})
		// refactor to clean up return objects in seq hook
		let returnArr = arr.map( report => {
			let retObj = {
					station: report.station,
					zipcode: report.zipcode,
					location: report.location,
					fst24p50: report.fst24p50,
					fst24p60: report.fst24p60,
					fst24p70: report.fst24p70,
					fst24p80: report.fst24p80,
					fst24p90: report.fst24p90,
					fst28p50: report.fst28p50,
					fst28p60: report.fst28p60,
					fst28p70: report.fst28p70,
					fst28p80: report.fst28p80,
					fst28p90: report.fst28p90,
					fst32p50: report.fst32p50,
					fst32p60: report.fst32p60,
					fst32p70: report.fst32p70,
					fst32p80: report.fst32p80,
					fst32p90: report.fst32p90,
					lst24p50: report.lst24p50,
					lst24p60: report.lst24p60,
					lst24p70: report.lst24p70,
					lst24p80: report.lst24p80,
					lst24p90: report.lst24p90,
					lst28p50: report.lst28p50,
					lst28p60: report.lst28p60,
					lst28p70: report.lst28p70,
					lst28p80: report.lst28p80,
					lst28p90: report.lst28p90,
					lst32p50: report.lst32p50,
					lst32p60: report.lst32p60,
					lst32p70: report.lst32p70,
					lst32p80: report.lst32p80,
					lst32p90: report.lst32p90
			}
			return retObj;
		})
		res.json(returnArr);
	})
	.catch(err => res.send(err))
})





module.exports = router;