function engineerModal() {
	let callEngineer = document.querySelector('.header_btn_wrap_block'),
		popupEngineer = document.querySelector('.popup_engineer'),
		popupClose = document.querySelectorAll('.popup_close');

	callEngineer.addEventListener('click', () => {
		popupEngineer.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	for (let i = 0; i < popupClose.length; i++) {
		popupClose[i].addEventListener('click', () => {
			popupEngineer.style.display = 'none';
			document.body.style.overflow = '';
		});
	}

	window.addEventListener('click', (e) => {
		if (e.target == popupEngineer) {
			popupEngineer.style.display = 'none';
			document.body.style.overflow = '';
		}
	});

}
module.exports = engineerModal;