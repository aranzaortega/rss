import cors from "cors"
import express from "express"
import RSSParser from "rss-parser"

// Definimos la URL del feed RSS que vamos a analizar.
const feedURL = "https://www.xatakandroid.com/tag/feeds/rss2.xml"
// Creamos una instancia del analizador de RSS.
const parser = new RSSParser()
// Creamos un arreglo vacío para almacenar los artículos del feed.
let articles = []

// Función asincrónica para analizar el feed y agregar los artículos al arreglo 'articles'.
const parse = async url => {
    const feed = await parser.parseURL(url)
    feed.items.forEach((item, i) => {
        articles.push({ item: {...item, id: i} })
    })
}
parse(feedURL)

// Creamos una instancia de Express y habilitamos el uso de CORS para permitir solicitudes desde otros dominios.
let app = express()
app.use(cors())

// Definimos una ruta raíz que devuelve el arreglo de artículos como respuesta.
app.get('/', (req, res) => {
    res.send(articles)
})

// Iniciamos el servidor en el puerto 4000 y mostramos un mensaje en la consola cuando esté listo.
const server = app.listen("4000", () => {
    console.log("App is listening at http://localhost:4000")
})

export default server