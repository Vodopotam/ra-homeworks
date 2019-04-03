'use strict';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main className='main'>
      			<h2 className='title'>{this.props.title}</h2>
     			<Section title={'Компоненты'} text={'Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.'} />
      			<Section title={'Выучил раз, используй везде!'} text={' После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.'} />
      			<Section title={'Использование JSX'} text={'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.'} />
      		</main>
		)
	}
}

class Section extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			isOpen: false
		}
	}

	toggleSection = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<section className={this.state.isOpen ? 'section open' : 'section'}>
	        	<button>toggle</button>
	        	<h3 className="sectionhead" onClick={this.toggleSection}>{this.props.title}</h3>
	        	<div className="articlewrap">
	          		<div className="article">
	      				{this.props.text}
	      			</div>
	      		</div>
	      	</section>
		)
	}
}

ReactDOM.render(
	<App title='React' />,
	document.getElementById('accordian')
	)