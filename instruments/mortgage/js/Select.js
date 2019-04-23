const { Select } = antd,
  Option = Select.Option;

class AutocompleteToolbox extends React.Component {
  state = {
    apartment: '',
  }

  handleSearch = (value) => {
    this.setState({
      apartment:value
    });
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <div>
      	<h3 className="chooseApartment=">Тип квартиры</h3>
        <Select defaultValue="new_building" 
                style={{ width: 350}} 
                onChange={this.handleSearch.bind(this)}>
          <Option value="new_building">Квартира в новостройке</Option>
          <Option value="old_building">Готовая квартира</Option>
          <Option value="countryhouse">Загородный дом</Option>
        </Select>
      </div>
    );
  }
}
