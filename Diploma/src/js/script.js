window.addEventListener('DOMContentLoaded', function() {

	"use strict";
	let timer = require('./parts/timer.js'),
		glazingTabs = require('./parts/glazingTabs.js'),
		decorationTabs = require('./parts/decorationTabs.js'),
		engineerModal = require('./parts/engineerModal.js'),
		popupModal = require('./parts/popupModal.js'),
		viewPhoto = require('./parts/viewPhoto.js');

	timer();
	glazingTabs();
	decorationTabs();
	engineerModal();
	popupModal();
	viewPhoto();

});