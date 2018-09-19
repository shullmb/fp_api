const express = require('express');
const router = express.Router();

// GET api/v1/frostpoint
router.get('/', (req, res) => {
	res.send('api')
})





module.exports = router;