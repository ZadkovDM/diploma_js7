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