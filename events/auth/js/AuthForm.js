'use strict';

const AuthForm = (onAuth) => {

	const userAuth = event => {
		event.preventDefault();

		if(!onAuth || typeof onAuth !== 'function') {
			return null;
		}

		const userData = event.currentTarget.elements;
		console.log(event.currentTarget.userData);
		
		const userAuth = {
			name: userData.name.value,
			email: userData.email.value,
			password: userData.password.value
		}
		onAuth(userAuth);
	};

	function checkEmail(event) {
		event.currentTarget.value = event.currentTarget.value.replace(/^[w@\.-]+/gi, '');
	}

	function checkPassword(event) {
		event.currentTarget.value = event.currentTarget.value.replace(/^[w\.-]+/gi, '');
	}

	return (
		<form className="ModalForm" action="/404/auth/" method="POST" onSubmit={userAuth}>
			<div className="Input">
				<input required type="text" placeholder="Имя" />
				<label></label>
			</div>
			<div className="Input">
				<input onChange={checkEmail} type="email" placeholder="Электронная почта" />
				<label></label>
			</div>
			<div className="Input">
				<input onChange={checkPassword} required type="password" placeholder="Пароль" />
				<label></label>
			</div>
			<button type="submit">
				<span>Войти</span>
				<i className="fa fa-fw fa-chevron-right"></i>
			</button>
		</form>
	);
}
