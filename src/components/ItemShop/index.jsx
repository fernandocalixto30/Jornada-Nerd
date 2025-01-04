import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ItemShop from "../ItemShop/";
import './style.css'

const ShopCarousel = () => {
  const items = [
    { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "The Witcher 3 Wild Hunt", valor: "R$ 200,00" },
    { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "Cyberpunk 2077", valor: "R$ 250,00" },
    { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "God of War", valor: "R$ 300,00" },
    { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "The Last", valor: "R$ 350,00" },
    { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "Red Dead", valor: "R$ 400,00" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((currentIndex + 1) % items.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + items.length) % items.length);

  const visibleItems = items.slice(currentIndex, currentIndex + 5);

  return (
    <div className="shop-carousel">
      <IoIosArrowBack className="arrow" onClick={prev} />
      <div className="items">
        {visibleItems.map((item,index) => (
          <ItemShop  key={index} img={item.img} nomeProduto={item.nome} valorProduto={item.valor} />
          
        ))}
      </div>
      
      <IoIosArrowForward className="arrow" onClick={next} />
    </div>
  );
};

export default ShopCarousel; 