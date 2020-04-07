/* global describe, it */
'use strict';
var assert = require('assert');
var shortName = require('../');

describe('short-name node module', function () {
	it('must shorten long names', function () {
		assert.equal(shortName('Fahad Ibnay Heylaal'), 'F Heylaal');
		assert.equal(shortName('Lord Voldemort'), 'L Voldemort');
		assert.equal(shortName('Albus Percival Wulfric Brian Dumbledore'), 'A Dumbledore');
		assert.equal(shortName('Tom Marvolo Riddle'), 'T Riddle');
	});

	it('should not shorten single names', function () {
		assert.equal(shortName('Hagrid'), 'Hagrid');
	});

	it('should not shorten non-strings', function () {
		assert.equal(shortName(123), 123);
		assert.equal(shortName(null), null);
	});
});
