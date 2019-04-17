'use strict';

const DateTime = props => {
    return (
        <p className="date">{props.date}</p>
    )
};

function changeDateFormat(Component) {
	return class extends React.Component {

		componentWillMount() {
			this.calculateDate();
		}

		calculateDate() {
			const hours = 1000*60*60,
				days = hours*24,
				timeDifference = new Date().getTime() - new Date(this.props.date).getTime();

				if (timeDifference < hours) {
					this.props.date = '12 минут назад'
				}
				if (timeDifference > hours && timeDifference < days) {
					this.props.date = '5 часов назад'
				}

				this.props.date = `${Math.round(timeDifference/days)} дней назад`;
		}

		render() {
			return <Component {...this.props} />
		}
	}
}

const DateTimePretty = changeDateFormat(DateTime);
