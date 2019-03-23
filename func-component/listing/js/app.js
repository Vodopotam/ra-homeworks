'use strict';

fetch('https://neto-api.herokuapp.com/etsy')
	.then(res => res.json())
	.then(items => {
		ReactDOM.render(
			<Listing items={items} />,
			document.getElementById('root')
			);
	})
	.catch(err => console.log(err));

const Listing = ({items}) => {
	const data = items.map((item) => {
		return <Item item={item} />;
	});
	return <div className='item-list'>{data}</div>;
}

const Item = ({item}) => {
	if (!item.hasOwnProperty("MainImage")) return null;

	return (
		<div className="item" key={item.listing_id}>
			<div className="item-image">
				<a href={item.url}>
					<img src={item.MainImage.url_570xN} />
				</a>
			</div>
			<div className="item-details">
				<Title title={item.title} />
				<Price price={item.price} currency={item.currency_code} />
				<Quantity quantity={item.quantity} />
			</div>
		</div>
		)
	}

const Title = ({title}) => {
	if (title.length > 50) {
		return <p className='item-title'>{title.slice(0, 50) + '...'}</p>;
	}

	return <p className='item-title'>{title}</p>;
}

const Price = ({price, currency}) => {
	if (currency === 'USD') return <p className='item-price'>${price}</p>;
	if (currency === 'EUR') return <p className='item-price'>€{price}</p>;
	return <p className='item-price'>{price}{currency}</p>;
}

const Quantity = ({quantity}) => {
	if (quantity <= 10) {
		return <p className='item-quantity level-low'>{quantity} left</p>
	} else if (quantity <= 20) {
		return <p className='item-quantity level-medium'>{quantity} left</p>
	} else if (quantity > 20) {
		return <p className='item-quantity level-high'>{quantity} left</p>
	}
}
