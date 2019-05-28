function glazingTabs() {

	let glazingInfo = document.querySelector('.glazing_slider'), //Родитель для табов
		glazingTab = glazingInfo.querySelectorAll('.glazing_block'), //Сами кнопки для табов
		glazingLink = glazingInfo.getElementsByTagName('a'), //Ссылка для подключения стиля
		glazingTabContent = document.querySelectorAll('.glazing-tabcontent'); //Контет

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