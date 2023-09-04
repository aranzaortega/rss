import { useState } from "react";
import { getImageFromArticle, formatDescription } from "../utils"
import { Link } from "react-router-dom";

const Home = ({ articles }) => {
  const [query, setQuery] = useState('')
  return (
    <div className="container mx-auto px-8">
      <form className="m-8">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="search"
            placeholder="Buscar título del artículo..."
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
        </div>
      </form>
      {articles.length > 0 && articles
      .filter(article => article.item.title.toLowerCase().includes(query))
      .map(article =>
        <div key={article.item.id} className="m-8">
        <Link
          to={`/article/${article.item.id}`}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100"
        >
          <div
            className="h-full w-96 object-cover"
            dangerouslySetInnerHTML={{__html: getImageFromArticle(article.item.content)}}
          ></div>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {article.item.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700">
                {formatDescription(article.item.contentSnippet)}
              </p>
          </div>
        </Link>
        </div>

        
      

      )}
    </div>
  )
}

export default Home