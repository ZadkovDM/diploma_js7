function viewPhoto() {

	// const row = document.querySelector('.works .row');

	// row.addEventListener('click', (event) => {
		
	// 	let target = event.target;
		
	// 	if (target.classList.contains('wow') || target.closest('.wow')){
	// 		let one = target.closest('.wow').querySelector('a');
	// 		target.preventDefault();
	// 		// target.querySelector('img').preventDefault();
	// 		console.log(one);
	// 	}
	// });


	let photoSmall = document.querySelectorAll('.photo'),
		overlay = document.querySelector('.overlay');

	for (let i = 0; i < photoSmall.length; i++) {
		photoSmall[i].addEventListener('click', () => {
			event.preventDefault();
			let div = document.createElement('div'),
				a = photoSmall[i].parentElement.href;
			div.innerHTML = photoSmall[i].parentElement.innerHTML;
			overlay.appendChild(div);
			overlay.querySelector('img').src = a;
			overlay.style.cssText = 'display: flex; justify-content: center; align-items: center;';
			document.body.style.overflow = 'hidden';
		});
	}

	window.addEventListener('click', (e) => {
		if (e.target == overlay) {
			overlay.style.display = 'none';
			overlay.innerHTML = '';
			document.body.style.overflow = '';
		}
	});

}
module.exports = viewPhoto;