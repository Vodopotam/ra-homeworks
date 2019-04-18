'use strict';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fixed: false };
    this.searchBox = null;
    this.setPosition = this.setPosition.bind(this);
  }

  render() {
    return <SearchBoxView ref={el => this.searchBoxEl = el} fixed={this.state.fixed} />
  }

  componentDidMount() {
    console.log(this.searchBox);
    window.addEventListener('scroll', this.setPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition);
  }

  isFixed() {
    return this.searchBoxEl.getBoundingClientRect().top <= 0 && window.pageYOffset >= 85;
  }

  setPosition() {
    this.setState({
      fixed: this.isFixed()
    })

  }
}
