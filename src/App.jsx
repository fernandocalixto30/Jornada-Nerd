import './App.css';
import Carosel from './components/carosel';
import Header from './components/Header';
import ShopCarousel from './components/ShopCarousel/';

function App() {
  return (
    <>
      <Header />

      <Carosel />

      <section className="container-shop">
        <div className="item-shop-info-text">
          <h2>Shop</h2>
        </div>
        <ShopCarousel />
        <ShopCarousel />
      </section>
      <footer className='footer'>
        <div className='footer-info-container'>
          <div className='footer-info'>
            <h3>Produtos</h3>
            <ul>
              <li><a href="">Peças para computdores</a></li>
              <li><a href="">Mnagás</a></li>
              <li><a href="">jogos nostalgicos</a></li>
              <li><a href="">computadores montados</a></li>
            </ul>
          </div>
          <div className='footer-info'>
            <h3>Produtos</h3>
            <ul>
              <li><a href="">Peças para computdores</a></li>
              <li><a href="">Mnagás</a></li>
              <li><a href="">jogos nostalgicos</a></li>
              <li><a href="">computadores montados</a></li>
            </ul>
          </div>
          <div className='footer-info'>
            <h3>Produtos</h3>
            <ul>
              <li><a href="">Peças para computdores</a></li>
              <li><a href="">Mnagás</a></li>
              <li><a href="">jogos nostalgicos</a></li>
              <li><a href="">computadores montados</a></li>
            </ul>
          </div>
        </div>
        <div className='footer-copyright'>
          <p >Todos os direitos reservados &copy; 2021 Jornada Nerd</p>
        </div>
      </footer>
    </>
  );
}

export default App;
