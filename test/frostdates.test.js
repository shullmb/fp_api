'use strict'

const assert = require('assert');
const request = require('supertest')
const app = require('../index')

describe('GET /api/v1/frostdates', () => {
	it('will return json', (done) => {
		request(app)
			.get('/api/v1/frostdates/98070')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, done)
	})
})
