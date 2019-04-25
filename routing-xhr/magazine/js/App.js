
const {BrowserRouter, Route, Switch, Link} = window.ReactRouterDOM;

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav/>
        <Switch>
          <Route path="/routing-xhr/magazine/"
                 component={Homepage}/>
          <Route path="/routing-xhr/magazine/subscribtion/"
                 component={SubscribtionPage}/>
          <Route path="/routing-xhr/magazine/article/:id"
                 component={ArticlePage}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
};