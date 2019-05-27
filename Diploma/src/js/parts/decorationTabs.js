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