import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
  return (
<header className="topo">
        <div className="container">
          <div className="logo">
            <h1>Jornada Nerd</h1>
          </div>
          <nav className="menu">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className="bts">
           <Link className="btn-acesse" href="#">Join Our Clan</Link>
          </div>
        </div>
      </header>
  )
}

export default Header