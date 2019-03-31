'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCardViewSwitched: true
    }
  }

  handleViewSwitch() {
    this.setState({isCardViewSwitched: !this.state.isCardViewSwitched});
    console.log("сменился тип вывода");
  }

  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.isCardViewSwitched ? VIEW_MODULE : VIEW_LIST}
            onSwitch={() => this.handleViewSwitch()} />
        </div>
        {this.renderLayout(this.state.isCardViewSwitched)}
      </div>
    );
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}
