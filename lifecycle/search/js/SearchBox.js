class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }

  componentDidMount() {
    this.setPosition = this.setPosition.bind(this);
    window.addEventListener('scroll', this.setPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition);
  }

  isFixed() {
    return document.querySelector('.search-box').getBoundingClientRect().top <= 0 && window.pageYOffset >= 85;
  }

  setPosition() {
    this.setState({
      fixed: this.isFixed()
    })
  }
}
