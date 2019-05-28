function calcModal() {

	let calcBtn = document.querySelectorAll('.popup_calc_btn'),
		calcClose = document.querySelectorAll('.calc_close'),
		calcBtnOne = document.querySelector('.popup_calc_button'),
		popup = document.querySelector('.popup_calc'),
		popupProfile = document.querySelector('.popup_calc_profile'),
		calcBtnTwo = document.querySelector('.popup_calc_profile_button'),
		popupEnd = document.querySelector('.popup_calc_end'),
		// Табы на первом модальном окне
		info = document.querySelector('.balcon_icons'), //Родитель для табов
		tabs = info.querySelectorAll('img'), //Табы
		content = document.querySelectorAll('.big_img > img'); //Контент табов

	for (let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', () => {
			for (let u = 0; u < tabs.length; u++) {
				event.preventDefault();
				content[u].style.display = 'none';
				tabs[u].classList.remove('do_image_more');
			}

			content[i].style.display = 'flex';
			tabs[i].classList.add('do_image_more');
		});
	}


	// Первое модальное окно
	for (let i = 0; i < calcBtn.length; i++) {
		calcBtn[i].addEventListener('click', () => {
			popup.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	}

	// Закрытие всех модальных окон по клику на крестик
	for (let i = 0; i < calcClose.length; i++) {
		calcClose[i].addEventListener('click', () => {
			popup.style.display = 'none';
			popupProfile.style.display = 'none';
			popupEnd.style.display = 'none';
			document.body.style.overflow = '';
		});
	}

	// Закрытие модального окна по клику на подложку
	window.addEventListener('click', (e) => {
		if (e.target == popup) {
			popup.style.display = 'none';
			document.body.style.overflow = '';
		}
	});

	// Второе модальное окно

	calcBtnOne.addEventListener('click', () => {
		popup.style.display = 'none';
		popupProfile.style.display = 'block';
	});

	window.addEventListener('click', (e) => {
		if (e.target == popupProfile) {
			popupProfile.style.display = 'none';
			document.body.style.overflow = '';
		}
	});

	// Третье модальное окно

	calcBtnTwo.addEventListener('click', () => {
		popupProfile.style.display = 'none';
		popupEnd.style.display = 'block';
	});

	window.addEventListener('click', (e) => {
		if (e.target == popupEnd) {
			popupEnd.style.display = 'none';
			document.body.style.overflow = '';
		}
	});

}
module.exports = calcModal;