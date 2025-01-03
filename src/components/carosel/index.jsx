
import { useState, useEffect } from "react";
import "./style.css";

import Minecraft from "../../assets/Minecraft.jpg";
import Jogos from "../../assets/jogos.jpg";
import PC from "../../assets/pc.jpg";
import Mangas from "../../assets/mangas.jpg";

const Carosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { img: Minecraft, title: "INICIE SUA JORNADA NERD" },
    { img: Jogos, title: "Aluguel de Jogos" },
    { img: PC, title: "Peças para Computadores" },
    { img: Mangas, title: "Empréstimo de Mangás" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  const titleWidths = ['50%', '70%', '400px', '450px']; 

  return (
    <section className="content-carousel">
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentIndex ? "active" : ""}`}
        >
          <img src={item.img} alt={`Imagem ${index + 1}`} />
          <div className="carousel-content">
            <h2 style={{ width: titleWidths[index] }}>{item.title}</h2>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Carosel;
