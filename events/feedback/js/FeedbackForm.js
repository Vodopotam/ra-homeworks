'use strict';

const FeedbackForm = ({data, onSubmit}) => {


	const sendForm = event => {
		event.preventDefault();
		const formElements = event.currentTarget.elements;
		const form = {
			salutation: formElements.salutation.value,
			name: formElements.name.value,
			subject: formElements.subject.value,
			message: formElements.message.value,
			email: formElements.email.value,
			snacks: Array.from(formElements.snacks).filter(snack => snack.checked).map(snack => snack.value)
		};
		onSubmit(JSON.stringify(form));
	}

	const salutation = (
		<div className="contact-form__input-group">
			<input className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер" defaultChecked={data.salutation === 'Мистер'} />
			<label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
			<input className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Мисис" defaultChecked={data.salutation === 'Мисис'} />
			<label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
			<input className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мис" defaultChecked={data.salutation === 'Мис'} />
			<label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
		</div>
		);

	const getName = event => {
		const field = event.currentTarget;
		field.value = firstToUpper(field.value);
	}

	const name = (
		<div className="contact-form__input-group">
			<label className="contact-form__label" htlmFor="name">Имя</label>
			<input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" onChange={getName} defaultValue={data.name} />
		</div>
		);

	const email = (
		<div class="contact-form__input-group">
			<label class="contact-form__label" for="email">Адрес электронной почты</label>
			<input class="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={data.email} />
		</div>
		);

	const subject = (
		<div className="contact-form__input-group">
			<label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
			<select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultChecked={data.subject}>
				<option>У меня проблема</option>
				<option>У меня важный вопрос</option>
			</select>
		</div>
		);

	const message = (
		<div className="contact-form__input-group">
			<label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
			<textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={data.message}></textarea>
		</div>
		);

	const snacks = (
		<div className="contact-form__input-group">
			<p className="contact-form__label--checkbox-group">Хочу получить:</p>
				<input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца" defaultChecked={data.snacks.includes("пицца")}/>
				<label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
				<input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог" defaultChecked={data.snacks.includes("пирог")} />
				<label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
		</div>
	);

	return (
		<form onSubmit={sendForm} className='content__form contact-form'>
			<div className='testng'>
				<p>Чем мы можем помочь?</p>
			</div>
			{salutation}
			{name}
			{email}
			{subject}
			{message}
			{snacks}
			<button className='contact-form__button' type='submit'>Отправить сообщение!</button>
			<output id='result' />
		</form>
		)
	
}

FeedbackForm.defaultProps = {
	data: {
		salutation: 'Мисис',
		name: 'Алевтина',
		subject: 'У меня важный вопрос',
		message: 'Как оформить доставку?',
		email: 'mis@test.co',
		snacks: ['пирог']
	}
};

function firstToUpper(string) {
 	if (!string) {
		return string;
	}
	const first = string[0].toUpperCase();
	const other = string.slice(1).toLowerCase();
		return `${first}${other}`
}