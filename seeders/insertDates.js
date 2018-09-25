const db = require('../models');
const raw = require('./data/output.json');

raw.forEach( obj => {
	db.frostdate.create({
		station: obj['Station'],
		zipcode: obj['Zip'],
		location: obj['Location'],
		fst24p50: obj['prbfst-t24Fp50'],
		fst24p60: obj['prbfst-t24Fp60'],
		fst24p70: obj['prbfst-t24Fp70'],
		fst24p80: obj['prbfst-t24Fp80'],
		fst24p90: obj['prbfst-t24F9p0'],
		fst28p50: obj['prbfst-t28Fp50'],
		fst28p60: obj['prbfst-t28Fp60'],
		fst28p70: obj['prbfst-t28Fp70'],
		fst28p80: obj['prbfst-t28Fp80'],
		fst28p90: obj['prbfst-t28Fp90'],
		fst32p50: obj['prbfst-t32Fp50'],
		fst32p60: obj['prbfst-t32Fp60'],
		fst32p70: obj['prbfst-t32Fp70'],
		fst32p80: obj['prbfst-t32Fp80'],
		fst32p90: obj['prbfst-t32Fp90'],
		lst24p50: obj['prblst-t24Fp50'],
		lst24p60: obj['prblst-t24Fp60'],
		lst24p70: obj['prblst-t24Fp70'],
		lst24p80: obj['prblst-t24Fp80'],
		lst24p90: obj['prblst-t24F9p0'],
		lst28p50: obj['prblst-t28Fp50'],
		lst28p60: obj['prblst-t28Fp60'],
		lst28p70: obj['prblst-t28Fp70'],
		lst28p80: obj['prblst-t28Fp80'],
		lst28p90: obj['prblst-t28Fp90'],
		lst32p50: obj['prblst-t32Fp50'],
		lst32p60: obj['prblst-t32Fp60'],
		lst32p70: obj['prblst-t32Fp70'],
		lst32p80: obj['prblst-t32Fp80'],
		lst32p90: obj['prblst-t32Fp90']
	})
})
