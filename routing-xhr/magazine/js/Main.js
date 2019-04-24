const Main = (props) => {
  return (
  <div className="container">
    <Subscribe />
    <ArticleComponent articles={props.articles} />
  </div>
  )
}