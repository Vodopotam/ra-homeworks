'use strict';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fixed: false };
    this.searchBox = null;
    this.getSearchBox = this.getSearchBox.bind(this);
    this.setPosition = this.setPosition.bind(this);
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} getSearchBox={this.getSearchBox} />
  }

  getSearchBox(el) {
    this.searchBox = el;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition);
  }

  isFixed() {
    return this.searchBox.getBoundingClientRect().top <= 0 && window.pageYOffset >= 85;
  }

  setPosition() {
    this.setState({
      fixed: this.isFixed()
    })
  }
}
