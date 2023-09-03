import { useParams } from "react-router-dom"
import { getImageFromArticle } from "../utils/getImageFromArticle"

const Detail = ({ articles }) => {
  const { articleId } = useParams()

  return (
    <div>
      {articles.length > 0 && articles
      .filter(article => article.item.id.toString() === articleId)
      .map(article =>
        <div key={article.item.id} className="m-8">
          <h3>{article.item.title}</h3>
          <div dangerouslySetInnerHTML={{__html: getImageFromArticle(article.item.content)}}></div>
          <p>{article.item.contentSnippet}</p>
        </div>
      )}
    </div>
  )
}

export default Detail