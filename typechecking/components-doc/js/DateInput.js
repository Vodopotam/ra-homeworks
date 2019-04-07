'use strict';

const DateInput = props => {
	return (
		<div className="form-group">
			<label>{props.label}</label>
			<input type="text" className="form-control" name={props.name} onChange={props.onChange}
				value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
		</div>
	)
};

const datePropType = (props, propName, ComponentName) => {
		let dateValue = props[propName];
		let isdateValue = (typeof dateValue === 'string') && (/^\d{4}-\d{2}-\d{2}/).test(dateValue);
		
		if (!isdateValue) {
			return new Error (`Неверный формат параметра ${propName} в компоненте ${ComponentName}: необходимо указать дату рождения в формате ГГГГ-ММ-ДД`)
		}

		return null;
	}

DateInput.defaultProps = {
	value: new Date().toISOString().substring(0, 10)
}


DateInput.propTypes = {
	onChange: PropTypes.func,
	label: PropTypes.string,
	name: PropTypes.string,	
	value: datePropType,
	required: PropTypes.bool
}
