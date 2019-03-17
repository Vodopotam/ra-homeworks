'use strict';

function Menu ({items, opened = false}) {
	if (!opened) {
		return (
			<div className="menu">
  				<div className="menu-toggle"><span></span></div>
			</div>
			);
	}

	return (
		<div className="menu menu-open">
  			<div className="menu-toggle"><span></span></div>
  			<nav>
    			<ul>
      				{items.map(menuItem)}
    			</ul>
  			</nav>
		</div>
	);
}

function menuItem(item) {
	return (
		<li><a href={item.href}>{item.title}</a></li>
		)
}