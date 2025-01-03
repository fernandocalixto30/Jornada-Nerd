// Shop.js
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./style.css";
import ItemShop from "./item/";

const Shop = () => {
  // Lista de itens
  const items = [
    {
      img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg",
      nomeProduto: "Witcher 3",
      valorProduto: "R$ 200,00",
    },
    {
      img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg",
      nomeProduto: "Cyberpunk 2077",
      valorProduto: "R$ 250,00",
    },
    {
      img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg",
      nomeProduto: "God of War",
      valorProduto: "R$ 300,00",
    },
    {
      img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg",
      nomeProduto: "The Last",
      valorProduto: "R$ 350,00",
    },
    {
      img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg",
      nomeProduto: "Red Dead",
      valorProduto: "R$ 400,00",
    },
  ];

  // Controla o índice inicial do carrossel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar no carrossel
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > items.length - 4 ? 0 : prevIndex + 1
    );
  };

  // Função para retroceder no carrossel
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? items.length - 4 : prevIndex - 1
    );
  };

  return (
    <section className="container-shop">
      <div className="container-shop-title">
        <h2>Shop</h2>
      </div>
      <div className="container-shop-carousel">
        <IoIosArrowBack
          className="arrow"
          onClick={handlePrevious}
          aria-label="Seta para voltar"
        />

        <div className="carousel-track">
          {items.slice(currentIndex, currentIndex + 4).map((item, index) => (
            <ItemShop
              key={index}
              img={item.img}
              NomeProduto={item.nomeProduto}
              ValorProduto={item.valorProduto}
            />
          ))}
        </div>

        <IoIosArrowForward
          className="arrow"
          onClick={handleNext}
          aria-label="Seta para avançar"
        />
      </div>
    </section>
  );
};

export default Shop;
