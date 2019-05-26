window.addEventListener('DOMContentLoaded', function() {

	"use strict";
	let timer = require('./parts/timer.js'),
		glazingTabs = require('./parts/glazingTabs.js'),
		decorationTabs = require('./parts/decorationTabs.js');

	timer();
	glazingTabs();
	decorationTabs();

});