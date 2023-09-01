import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [articles, setArticles]  = useState([])
  console.log(articles);
  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/")
      setArticles(res.data)
    } catch (error) {
      console.log(error)
    }
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
        From: Xataca
      </h2>
    </div>
    {articles.map((item, i) => <div key={i} className="m-8">{item.item.title}</div>)}
    </>
  )
}

export default App
