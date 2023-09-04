import { useEffect, useState } from 'react';
import axios from 'axios';

export function useAxios() {
  // Almacenamos los datos recuperados de la API.
  const [articles, setArticles]  = useState([])

  // Definimos una función asincrónica que realiza una solicitud GET a la API local.
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

  // Retornamos un objeto para que pueda ser utilizado por el componente que use este hook.
  return { articles }
}