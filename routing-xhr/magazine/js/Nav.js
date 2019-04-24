/*const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Известное онлайн издание</Link>
  </nav>
)*/

const { withRouter } = window.ReactRouterDOM;
const Header =({location}) => {
	const articleId = location.pathname.match(/\d+$/);
	
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		{articleId
			? <p className="navbar-brand">Уникальный идентификатор статьи: { articleId }</p>
    		: <Link className="navbar-brand" to="/">Известное онлайн издание</Link>
		}
  		</nav>
		)
}

const Nav = withRouter(Header)
