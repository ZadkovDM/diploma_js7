function glazingTabs() {

	let glazingInfo = document.querySelector('.glazing_slider'),
		glazingTab = glazingInfo.querySelectorAll('.glazing_block'),
		glazingTabContent = document.querySelectorAll('.glazing-tabcontent');

	for (let i = 0; i < glazingTab.length; i++) {
		glazingTab[i].addEventListener('click', function () {
			for (let u = 0; u < glazingTab.length; u++) {
				glazingTab[u].classList.remove('active');
				glazingTabContent[u].style.display = 'none';
			}

			this.classList.add('active');
			glazingTabContent[i].style.display = 'flex';
		});
	}

}

module.exports = glazingTabs;