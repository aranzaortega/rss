
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useAxios } from "./hooks/useAxios"

function App() {
  const { articles } = useAxios();

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home articles={articles}/>} />
      <Route path="/article/:articleId" element={<Detail articles={articles}/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
