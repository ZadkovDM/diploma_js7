function calcModal() {

	let calcBtn = document.querySelectorAll('.popup_calc_btn'),
		calcClose = document.querySelectorAll('.popup_calc_close'),
		calcBtnNext = document.querySelector('.popup_calc_button'),
		popup = document.querySelector('.popup_calc'),
		popupProfile = document.querySelector('.popup_calc_profile');

	// Первое модальное окно

	for (let i = 0; i < calcBtn.length; i++) {
		calcBtn[i].addEventListener('click', () => {
			popup.style.display = 'block';
		});
	}

	for (let i = 0; i < calcClose.length; i++) {
		calcClose[i].addEventListener('click', () => {
			popup.style.display = 'none';
		});
	}

	window.addEventListener('click', (e) => {
		if (e.target == popup) {
			popup.style.display = 'none';
		}
	});

	// Второе модальное окно

	calcBtnNext.addEventListener('click', () => {
		popup.style.display = 'none';
		popupProfile.style.display = 'block';
	});

}
module.exports = calcModal;