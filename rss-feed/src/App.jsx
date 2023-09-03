import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [articles, setArticles]  = useState([])
  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/")
      setArticles(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getImageFromArticle = (article) => {
    var imgRegex = /<img[^>]*>/g
    var match = article.match(imgRegex)
    var imgTag = "<p>No hay imagen del artículo</p>"
    if (match) { imgTag = match[0] }
    return imgTag
  }

  useEffect(() => {
    getArticles();
  }, [])

  return (
    <>
    <div className="text-center m-8">
      <h1 className="text-3xl font-bold text-sky-400">
        RSS Feed
      </h1>
      <h2 className="text-xl font-bold">
        From: Xataka Android
      </h2>
    </div>
    {articles.length > 0 && articles.map((item, i) =>
      <div key={i} className="m-8">
        <h3>{item.item.title}</h3>
        <div dangerouslySetInnerHTML={{__html: getImageFromArticle(item.item.content)}}></div>
      </div>
    )}
    </>
  )
}

export default App
