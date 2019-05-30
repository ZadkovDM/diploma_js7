function formModal() {
	
	let validTel = document.querySelectorAll('input[name="user_phone"]');

	validTel.forEach(function (item) {
		item.oninput = function () {
			item.value = item.value.replace(/[^\d]/g, '');
		}
	});

	let message = {
		loading: 'Идет отправка',
		success: 'Отправлено',
		failure: 'Ошибка'
	};

	let contactForm = document.querySelectorAll('.second_form, .main_form'),
		inputForm = document.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status');

	// Модальное окно
	let sendForm = (form, input) => {
		contactForm.forEach(function (form) {
			form.addEventListener('submit', (event) => {
				event.preventDefault();
				form.appendChild(statusMessage);
				let formData = new FormData(form);

				let postData = (data) => {

					return new Promise(function (resolve, reject) {
						let request = new XMLHttpRequest();

						request.open('POST', 'server.php');

						request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

						let obj = {};
						formData.forEach((value, key) => {
							obj[key] = value;
						});

						let data = JSON.stringify(obj);

						request.onreadystatechange = function () {
							if (request.readyState < 4) {
								resolve()
							} else if (request.readyState === 4 && request.status == 200) {
								resolve()
							} else {
								reject()
							}
						}

						request.send(data);
					})

				} // Конец postData

				let clearInput = () => {
					for (let i = 0; i < input.length; i++) {
						input[i].value = '';
					}
				}

				postData(formData)
					.then(() => statusMessage.innerHTML = message.loading)
					.then(() => {
						statusMessage.innerHTML = message.success;
					})
					.catch(() => statusMessage.innerHTML = message.failure)
					.then(clearInput)
			});
		});
	}

	sendForm(contactForm, inputForm);
}
module.exports = formModal;