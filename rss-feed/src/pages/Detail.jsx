import { useParams } from "react-router-dom"
import { getImageFromArticle } from "../utils/getImageFromArticle"

const Detail = ({ articles }) => {
  const { articleId } = useParams()

  return (
    <div className="container mx-auto px-8">
      {articles.length > 0 && articles
      .filter(article => article.item.id.toString() === articleId)
      .map(article =>
        <div key={article.item.id} className="m-8">
          <div className="m-3">
            <h3 className="text-xl font-bold my-8">{article.item.title}</h3>
          </div>
          <div className="inline-block">
            <div
              className="max-w-[50%] float-left m-3"
              dangerouslySetInnerHTML={{__html: getImageFromArticle(article.item.content)}}>
            </div>
            <p className="m-3">{article.item.contentSnippet}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Detail