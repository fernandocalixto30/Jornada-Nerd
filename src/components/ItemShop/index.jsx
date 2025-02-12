import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./Style.css";

const ItemShop = ({ img, nomeProduto, valorProduto }) => {
  const storageKey = "ItemShopStorage";

  // Estado para controlar se o item está favoritado
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setIsFavorited(favoritos.includes(nomeProduto));
  }, [nomeProduto]);

  const toggleFavorite = () => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favoritos.includes(nomeProduto)) {
      const updatedFavoritos = favoritos.filter((item) => item !== nomeProduto);
      localStorage.setItem("favoritos", JSON.stringify(updatedFavoritos));
      setIsFavorited(false);
    } else {
      favoritos.push(nomeProduto);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      setIsFavorited(true);
    }
  };

  const SetStorage = (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    const itemArmazenado = JSON.parse(localStorage.getItem(storageKey)) || [];

    // Criando um novo item com uma chave única
    const novoItem = {
      id: itemArmazenado.length + 1, 
        NomeProduto: nomeProduto,
        imagemProduto: image,
      ValorProduto: valorProduto,
    };

    // Verifica se o item já existe no carrinho para evitar duplicação
    if (!itemArmazenado.some((item) => item.NomeProduto === nomeProduto)) {
      
      itemArmazenado.push(novoItem);
      localStorage.setItem(storageKey, JSON.stringify(itemArmazenado));
    } else {
      alert("Este item já está no carrinho!");
    }
  };

  return (
    <div className="item-shop">
      <img src={img} alt={nomeProduto} className="item-shop-img" />
      <div className="item-info">
        <div className="item-name">
          <h3 className="nome-item">{nomeProduto}</h3>
          <FaHeart
            className="icon-heart"
            style={{ color: isFavorited ? "red" : "gray", cursor: "pointer" }}
            onClick={toggleFavorite}
          />
        </div>
        <p className="valor-item">{valorProduto}</p>
      </div>

      <div className="add-carinho">
        <button className="btn-carinho" onClick={SetStorage}>
          <AiOutlineShoppingCart className="icon-add-carrinho" /> Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ItemShop;
