import { useEffect, useState } from 'react';
import axios from 'axios';

export function useAxios() {
  const [articles, setArticles]  = useState([])
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

  return { articles }
}