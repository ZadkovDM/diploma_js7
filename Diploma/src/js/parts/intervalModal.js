function intervalModal() {

	let show = document.querySelector('.popup');

	function showModal() {
		show.style.display = 'flex';
	}

	setTimeout(showModal, 60000);

}
module.exports = intervalModal;