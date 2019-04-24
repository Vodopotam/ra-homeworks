const {BrowserRouter, Route, Switch, Link, withRouter} = window.ReactRouterDOM;

class App extends React.Component {
  render() {
    const Header = withRouter(Nav);
      return (
        <BrowserRouter>
          <div>
            <Header />
              <Switch>
                <Route path="/subscribe"
                       component={SubscribtionPage}/>
                <Route path="article/:id"
                       component={ArticlePage}/>
                <Route path="*"
                       component={Main}/>
              </Switch>

          </div>
          </BrowserRouter>
    )
  }
};