import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="text-center m-8">
      <Link to="/">
        <h1 className="text-3xl font-bold text-sky-400">
          RSS Feed
        </h1>
      </Link>
      <h2 className="text-xl font-bold">
        From: Xataka Android
      </h2>
    </div>
  )
}

export default Header