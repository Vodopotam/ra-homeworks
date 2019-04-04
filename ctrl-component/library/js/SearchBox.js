'use strict';

class SearchBox extends React.Component {
	constructor(props) {
		super(props);
	}

	filterBooks = (event) => {
		this.props.filterBooks(event.currentTarget.value);
	}

	render() {
		return (
			<input type="text" 
					placeholder="Поиск по названию или автору" 
					onChange={this.filterBooks} 
					value={this.props.value} />
		);
	}
}