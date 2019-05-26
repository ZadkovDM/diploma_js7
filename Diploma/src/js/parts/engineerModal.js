function engineerModal() {
	let callEngineer = document.querySelector('.header_btn_wrap_block'),
		popupEngineer = document.querySelector('.popup_engineer'),
		popupClose = document.querySelectorAll('.popup_close')[1];

	callEngineer.addEventListener('click', () => {
		popupEngineer.style.display = 'block';
	});

	popupClose.addEventListener('click', () => {
		popupEngineer.style.display = 'none';
	});

	window.addEventListener('click', (e) => {
		if (e.target == popupEngineer) {
			popupEngineer.style.display = 'none';
		}
	});

}
module.exports = engineerModal;