import { Link } from "react-router-dom"
import './style.css'

const NotFund = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <img src="https://media.tenor.com/7jQJjx6GJLMAAAAC/404.gif" alt="404" />
      <Link to="/">Go back to home</Link>
    </div>
  )
}

export default NotFund