/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/decorationTabs.js":
/*!****************************************!*\
  !*** ./src/js/parts/decorationTabs.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function decorationTabs() {

	let decorationTab = document.querySelectorAll('.decoration_item'),
		decorationActive = document.querySelectorAll('.decoration_item > div'),
		decorationTabContent = document.querySelectorAll('.decoration-tabcontent');

	for (let i = 0; i < decorationTab.length; i++) {
		decorationTab[i].addEventListener('click', () => {
			for (let u = 0; u < decorationTab.length; u++) {
				decorationActive[u].classList.remove('after_click');
				decorationTabContent[u].style.display = 'none';
			}

			decorationActive[i].classList.add('after_click');
			decorationTabContent[i].style.display = 'flex';
		});
	}

}

module.exports = decorationTabs;

/***/ }),

/***/ "./src/js/parts/engineerModal.js":
/*!***************************************!*\
  !*** ./src/js/parts/engineerModal.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function engineerModal() {
	let callEngineer = document.querySelector('.header_btn_wrap_block'),
		popupEngineer = document.querySelector('.popup_engineer'),
		popupClose = document.querySelectorAll('.popup_close');

	callEngineer.addEventListener('click', () => {
		popupEngineer.style.display = 'block';
	});

	for (let i = 0; i < popupClose.length; i++) {
		popupClose[i].addEventListener('click', () => {
			popupEngineer.style.display = 'none';
		});
	}

	window.addEventListener('click', (e) => {
		if (e.target == popupEngineer) {
			popupEngineer.style.display = 'none';
		}
	});

}
module.exports = engineerModal;

/***/ }),

/***/ "./src/js/parts/formModal.js":
/*!***********************************!*\
  !*** ./src/js/parts/formModal.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function formModal() {
	
	let validTel = document.querySelectorAll('input[name="user_phone"]');

	validTel.forEach(function (item) {
		item.oninput = function () {
			item.value = item.value.replace(/[^\d]/g, '');
		}
	});

	let message = {
		loading: 'Идет отправка',
		success: 'Отправлено',
		failure: 'Ошибка'
	};

	let form = document.querySelector('.main_form'),
		input = form.getElementsByTagName('input'),
		contactForm = document.querySelector('.form'),
		contactInput = contactForm.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status');

	// Модальное окно

	let sendForm = (form, input) => {
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			form.appendChild(statusMessage);
			let formData = new FormData(form);

			let postData = (data) => {

				return new Promise(function (resolve, reject) {
					let request = new XMLHttpRequest();

					request.open('POST', 'server.php');

					request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

					let obj = {};
					formData.forEach((value, key) => {
						obj[key] = value;
					});

					let data = JSON.stringify(obj);

					request.onreadystatechange = function () {
						if (request.readyState < 4) {
							resolve()
						} else if (request.readyState === 4 && request.status == 200) {
							resolve()
						} else {
							reject()
						}
					}

					request.send(data);
				})

			} // Конец postData

			let clearInput = () => {
				for (let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
			}

			postData(formData)
				.then(() => statusMessage.innerHTML = message.loading)
				.then(() => {
					statusMessage.innerHTML = message.success;
				})
				.catch(() => statusMessage.innerHTML = message.failure)
				.then(clearInput)
		});
	}

	sendForm(form, input);
	sendForm(contactForm, contactInput);
}
module.exports = formModal;

/***/ }),

/***/ "./src/js/parts/glazingTabs.js":
/*!*************************************!*\
  !*** ./src/js/parts/glazingTabs.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function glazingTabs() {

	let glazingInfo = document.querySelector('.glazing_slider'),
		glazingTab = glazingInfo.querySelectorAll('.glazing_block'),
		glazingLink = glazingInfo.getElementsByTagName('a'),
		glazingTabContent = document.querySelectorAll('.glazing-tabcontent');

	for (let i = 0; i < glazingTab.length; i++) {
		glazingTab[i].addEventListener('click', () => {
			for (let u = 0; u < glazingTab.length; u++) {
				glazingLink[u].classList.remove('active');
				glazingTabContent[u].style.display = 'none';
			}

			glazingLink[i].classList.add('active');
			glazingTabContent[i].style.display = 'flex';
		});
	}

}

module.exports = glazingTabs;

/***/ }),

/***/ "./src/js/parts/intervalModal.js":
/*!***************************************!*\
  !*** ./src/js/parts/intervalModal.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function intervalModal() {

	let show = document.querySelector('.popup');

	function showModal() {

		show.style.display = 'flex';

	}
	setTimeout(showModal, 60000);

}
module.exports = intervalModal;

/***/ }),

/***/ "./src/js/parts/popupModal.js":
/*!************************************!*\
  !*** ./src/js/parts/popupModal.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function popupModal() {
	let callBack = document.querySelectorAll('.phone_link'),
		popupModal = document.querySelector('.popup'),
		popupClose = document.querySelectorAll('.popup_close');

	for (let i = 0; i < callBack.length; i++) {
		callBack[i].addEventListener('click', () => {
			popupModal.style.display = 'block';
		});
	}

	for (let i = 0; i < popupClose.length; i++) {
		popupClose[i].addEventListener('click', () => {
			popupModal.style.display = 'none';
		});
	}

	window.addEventListener('click', (e) => {
		if (e.target == popupModal) {
			popupModal.style.display = 'none';
		}
	});

}
module.exports = popupModal;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
	let deadline = '2019-12-18';

	let getTimeRemaining = (endtime) => {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / 1000 / 60 / 60) % 24),
			days = Math.floor((t / (1000 * 60 * 60 * 24)));

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	let setClock = (id, endtime) => {
		let timer = document.getElementById(id),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInteval = setInterval(updatesClock, 1000);

		let zero = (a) => {
			if (a < 10) {
				a = '0' + a;
			}
			return a;
		}

		function updatesClock() {
			let t = getTimeRemaining(endtime);
			days.textContent = zero(t.days);
			hours.textContent = zero(t.hours);
			minutes.textContent = zero(t.minutes);
			seconds.textContent = zero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInteval);
				days.textContent = '00';
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}
	}


	setClock('timer', deadline);
}

module.exports = timer;

/***/ }),

/***/ "./src/js/parts/viewPhoto.js":
/*!***********************************!*\
  !*** ./src/js/parts/viewPhoto.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function viewPhoto() {
	
}
module.exports = viewPhoto;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {

	"use strict";
	let timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
		glazingTabs = __webpack_require__(/*! ./parts/glazingTabs.js */ "./src/js/parts/glazingTabs.js"),
		decorationTabs = __webpack_require__(/*! ./parts/decorationTabs.js */ "./src/js/parts/decorationTabs.js"),
		engineerModal = __webpack_require__(/*! ./parts/engineerModal.js */ "./src/js/parts/engineerModal.js"),
		popupModal = __webpack_require__(/*! ./parts/popupModal.js */ "./src/js/parts/popupModal.js"),
		formModal = __webpack_require__(/*! ./parts/formModal.js */ "./src/js/parts/formModal.js"),
		intervalModal = __webpack_require__(/*! ./parts/intervalModal.js */ "./src/js/parts/intervalModal.js"),
		viewPhoto = __webpack_require__(/*! ./parts/viewPhoto.js */ "./src/js/parts/viewPhoto.js");

	timer();
	glazingTabs();
	decorationTabs();
	engineerModal();
	popupModal();
	formModal();
	intervalModal();
	viewPhoto();

});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map