window.addEventListener('DOMContentLoaded', function() {

	"use strict";
	let timer = require('./parts/timer.js'),
		glazingTabs = require('./parts/glazingTabs.js'),
		decorationTabs = require('./parts/decorationTabs.js'),
		engineerModal = require('./parts/engineerModal.js'),
		popupModal = require('./parts/popupModal.js'),
		formModal = require('./parts/formModal.js'),
		intervalModal = require('./parts/intervalModal.js'),
		viewPhoto = require('./parts/viewPhoto.js');

	timer();
	glazingTabs();
	decorationTabs();
	engineerModal();
	popupModal();
	formModal();
	intervalModal();
	viewPhoto();

});