import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { HiOutlineShoppingBag } from "react-icons/hi2";
import './style.css'
import ItemShop from "../../components/ItemShop";

const Shop = () => {
    const items = [
        { img: "https://image.winudf.com/v2/image1/Y29tLmFkZG9ucy5za2luc19zY3JlZW5fMTNfMTY0NDg4MzUxNV8wMTc/screen-13.jpg?fakeurl=1&type=.jpg", nome: "Cyberpunk 2077", valor: "R$ 250,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "God of War", valor: "R$ 300,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "The Last", valor: "R$ 350,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "Red Dead", valor: "R$ 400,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "cabare", valor: "R$ 200,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "Cyberpunk 2077", valor: "R$ 250,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "God of War", valor: "R$ 300,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "The Last", valor: "R$ 350,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "Red Dead", valor: "R$ 400,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "cabare", valor: "R$ 200,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "Cyberpunk 2077", valor: "R$ 250,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "God of War", valor: "R$ 300,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "The Last", valor: "R$ 350,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "Red Dead", valor: "R$ 400,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "cabare", valor: "R$ 200,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "Cyberpunk 2077", valor: "R$ 250,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "God of War", valor: "R$ 300,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "The Last", valor: "R$ 350,00" },
        { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "Red Dead", valor: "R$ 400,00" },
    ];
    return (
        <>
            <Header />
            <section className="shop-container">
                <div className="shop-container-icon">
               <nav className="nav-bar-container-categoria">
                 <ul>
                        <li><a href="#">Computador</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">mangás</a></li>

                    </ul>
               </nav>
                   
                    <HiOutlineShoppingBag className="icon-shop" />
                </div>
                <div className="container-shop-items">
                    {items.map((item, index) => (

                        <ItemShop
                            key={index}
                            img={item.img}
                            nomeProduto={item.nome}
                            valorProduto={item.valor}
                        />

                    ))}
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Shop