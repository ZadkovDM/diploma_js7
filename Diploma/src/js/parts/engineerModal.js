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