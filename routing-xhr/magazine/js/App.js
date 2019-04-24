
/*const {BrowserRouter, Route, Switch, Link, withRouter} = window.ReactRouterDOM;

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const Header = withRouter(Nav);
      return (
        <div>
          <Header />
            <Switch>
              <Route path="article/:id"
                    component={ArticlePage}/>
              <Route path="/subscribe"
                      component={SubscribtionPage}/>
              <Route path="/"
                      component={Main}/>
            </Switch>
          </div>
    )
  }
};*/

class App extends React.Component {
  render() {
      return (
        <div>
          <Nav />
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
                <Route path="article/:id"
                  component={ArticlePage}/>
              <Route path="/subscribe"
                  component={SubscribtionPage}/>
            </Switch>
          </div>
    )
  }
}
