const {Input} = antd;

class InputBox extends React.Component {
    state = {
      price: '',
      money: '',
      duration: ''
    }

  onChange = (value) => {
    console.log('changed', value)
  }

  render() {
    return  (
      <section>
        <Input type='number'  
              name='price' 
              addonBefore="Стоимость" 
              addonAfter="руб."
              onChange={this.onChange.bind(this, 'price')} 
              required />

        <Input type='number'  
              name='money' 
              addonBefore="На руках" 
              addonAfter="руб."
              onChange={this.onChange.bind(this, 'money')} 
              required />

        <Input type='number' 
              name='duration' 
              addonBefore="Срок кредита" 
              addonAfter="руб."
              onChange={this.onChange.bind(this, 'duration')} 
              required />
      </section>
    );
  }
}



