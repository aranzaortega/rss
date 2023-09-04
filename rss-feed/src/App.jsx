
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useAxios } from "./hooks/useAxios"

function App() {
  // Utilizamos el hook 'useAxios' para obtener el arreglo principal de 'articles'.
  const { articles } = useAxios();

  return (
    <>
    <Header />
    {/* Configuramos las rutas de la aplicación usando 'Routes'. */}
    <Routes>
      <Route path="/" element={<Home articles={articles}/>} />
      <Route path="/article/:articleId" element={<Detail articles={articles}/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
