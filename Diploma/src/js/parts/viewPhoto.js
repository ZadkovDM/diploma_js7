function viewPhoto() {
	let photo = document.querySelectorAll('.photo')[0];
	
	photo.addEventListener('click', () => {
		console.log('done');
	});
}
module.exports = viewPhoto;