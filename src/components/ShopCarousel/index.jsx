import { useState, useEffect } from "react";
import ItemShop from "../ItemShop/";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "./style.css"; // Estilos personalizados

const ShopCarousel = () => {


  function getSlidesPerView() {
    const width = window.innerWidth;
    if (width > 900) return 5;
    if (width > 768) return 3;
    return 1;
  }

  useEffect(() => {
    const handleResize = () => {

    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "The Witcher 3 Wild Hunt", valor: "R$ 200,00" },
    { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "Cyberpunk 2077", valor: "R$ 250,00" },
    { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "God of War", valor: "R$ 300,00" },
    { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "The Last", valor: "R$ 350,00" },
    { img: "https://images.stopgame.ru/news/2021/07/09/IHaHJTvlE.jpg", nome: "Red Dead", valor: "R$ 400,00" },
  ];

  return (
    <div className="slider-container">
   <MdKeyboardArrowLeft className="arrow-left"/>
   <div className="container-items-shop">
       {items.map((item, index) => (
       
            <ItemShop 
            key={index}
              img={item.img}
              nomeProduto={item.nome}
              valorProduto={item.valor}
            />

        ))}
   </div>
     
  <MdKeyboardArrowRight className="arrow-right"/>
    </div>
  );
};

export default ShopCarousel;
