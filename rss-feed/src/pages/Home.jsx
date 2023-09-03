import { getImageFromArticle } from "../utils/getImageFromArticle"
import { Link } from "react-router-dom";

const Home = ({ articles }) => {

  return (
    <div>
      {articles.length > 0 && articles.map(article =>
        <div key={article.item.id} className="m-8">
          <Link to={`/article/${article.item.id}`}>
            <h3>{article.item.title}</h3>
          </Link>
          <div dangerouslySetInnerHTML={{__html: getImageFromArticle(article.item.content)}}></div>
        </div>
      )}
    </div>
  )
}

export default Home