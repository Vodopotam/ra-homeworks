'use strict';

function countStars(count) {
	const starsList = [];
	for (let i  = 0; i < count; i++) {
		starsList.push(<li key={i}><Star /></li>);
	}

	return starsList;
}

function Stars({count}) {
	if (count < 1 || count > 5 || typeof count !== 'number') {
		return null;
	}

	return <ul className="card-body-stars u-clearfix">{countStars(count)}</ul>;
}

Stars.defaultProps = {
	stars: 0
}