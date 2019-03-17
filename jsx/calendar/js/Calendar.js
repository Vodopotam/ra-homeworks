'use strict';

function Calendar({date}) {
	const month = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
	const day = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
	return (
		<div className="ui-datepicker">
  			<div className="ui-datepicker-material-header">
    			<div className="ui-datepicker-material-day">{day[date.getDay()]}</div>
    			<div className="ui-datepicker-material-date">
      				<div className="ui-datepicker-material-day-num">{date.getDate()}</div>
      				<div className="ui-datepicker-material-month">{month[date.getMonth()]}</div>
      				<div className="ui-datepicker-material-year">{date.getFullYear()}</div>
    			</div>
  			</div>
  			<div className="ui-datepicker-header">
    			<div className="ui-datepicker-title">
      				<span className="ui-datepicker-month">{getFirstLetterToUpperCase(date.toLocaleString('ru-Ru', {month: 'long'}))}</span>&nbsp;<span class="ui-datepicker-year">{date.getFullYear()}</span>
    			</div>
  			</div>
  			<table className="ui-datepicker-calendar">
    			<colgroup>
			    	<col />
			    	<col />
			    	<col />
			    	<col />
			    	<col />
			    	<col className="ui-datepicker-week-end" />
			    	<col className="ui-datepicker-week-end" />
			    </colgroup>
    			<thead>
      				<tr>
				        <th scope="col" title="Понедельник">Пн</th>
				        <th scope="col" title="Вторник">Вт</th>
				        <th scope="col" title="Среда">Ср</th>
				        <th scope="col" title="Четверг">Чт</th>
				        <th scope="col" title="Пятница">Пт</th>
				        <th scope="col" title="Суббота">Сб</th>
				        <th scope="col" title="Воскресенье">Вс</th>
				    </tr>
				</thead>
    			{createCalendar(date)}
 	</table>
</div>
		)
}

function createCalendar(date) {
	const dateArr = getDays(date);

	const firstWeek = dateArr.map((item, index) => {
		if (index< 7) {
			let config;
			if (item > 1 && 7 < item) {
				config = 'ui-datepicker-other-month';
			} 
			if (item <= 7 && item == date.getDate()) {
				config = 'ui-datepicker-today';
			}

			return (<td className={config} key={index}>{item}</td>);
		}
	});

	const secondWeek = dateArr.map((item, index) => {
		if (index >= 7 && index < 14) {
			let config;
			if (item == date.getDate()) {
				config = 'ui-datepicker-today';
			}

			return (<td className={config} key={index}>{item}</td>);
		}
	});

	const thirdWeek = dateArr.map((item, index) => {
		if (index >= 14 && index < 21) {
			let config;
			if (item == date.getDate()) {
				config = 'ui-datepicker-today';
			}
			return (<td className={config} key={index}>{item}</td>);
		}
	});

	const fourthWeek = dateArr.map((item, index) => {
		if (index >= 21 && index < 28) {
			let config;
			if (item == date.getDate()) {
				config = 'ui-datepicker-today';
			}
			return (<td className={config} key={index}>{item}</td>);
		}
	});

	const fifthWeek = dateArr.map((item, index) => {
		if (index >= 28 && index < 35) {
			let config;
			if (item < 7) {
				config = 'ui-datepicker-other-month';
			}
			if (item > 7 && item == date.getDate()) {
				config = 'ui-datepicker-today';
			}
			return (<td className={config} key={index}>{item}</td>);
		}
	});

	const sixthWeek = dateArr.map((item, index) => {
		if (index >= 35 && index < 42){
			let config = '';
			if (item < 7) {
				config = 'ui-datepicker-other-month';
			}
			if (item > 7 && item == date.getDate()) {
					config = 'ui-datepicker-today';
			}
			return (<td className={config} key={index}>{item}</td>);
		}
	});
	
	return (
		<tbody>
			<tr>	
				{firstWeek}
			</tr>
			<tr>	
				{secondWeek}
			</tr>
			<tr>	
				{thirdWeek}
			</tr>
			<tr>	
				{fourthWeek}
			</tr>
			<tr>	
				{fifthWeek}
			</tr>
			<tr>	
				{sixthWeek}
			</tr>
		</tbody>)
}

function getDays(date) {
	const month = date.getMonth();
	const getMonthYear = new Date (date.getFullYear(), date.getMonth());
	const copyMonthYear = new Date (getMonthYear);
	let dateArr = [];
	let count = 1;

	for (let i = 0; i < getDay(getMonthYear); i++) {
		dateArr.push(copyMonthYear.getDate(copyMonthYear.setDate(copyMonthYear.getDate() - 1)));
	}

	while (getMonthYear.getMonth() == month) {
		dateArr.push(getMonthYear.getDate());
		getMonthYear.setDate(getMonthYear.getDate() + 1);
	}
	while (dateArr.length % 7 != 0) {
		dateArr.push(count++);
	}

	return dateArr;
}

function getFirstLetterToUpperCase(str) {
	if (!str) return str;

	return str[0].toUpperCase() + str.slice(1);
}

function getDay(date) {
	let day = date.getDay();
	if (day == 0) {
		day = 7;
	}
	return day - 1;
}

