function decorationTabs() {

	let decorationInfo = document.querySelector('.decoration_slider'),
		decorationTab = decorationInfo.querySelectorAll('.decoration_item'),
		decorationTabContent = document.querySelectorAll('.decoration-tabcontent');

	for (let i = 0; i < decorationTab.length; i++) {
		decorationTab[i].addEventListener('click', function () {
			for (let u = 0; u < decorationTab.length; u++) {
				decorationTab[u].classList.remove('after_click');
				decorationTabContent[u].style.display = 'none';
			}

			this.classList.add('after_click');
			decorationTabContent[i].style.display = 'flex';
		});
	}

}

module.exports = decorationTabs;