import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Style.css";

const ItemShop = ({ img, nomeProduto, valorProduto }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <div className="item-shop">
      <img src={img} alt={nomeProduto} className="item-shop-img" />
      <div className="item-info">
         <div className="item-name">
        <h3 className="nome-item">{nomeProduto}</h3>
        <FaHeart className="
        icon-heart" style={{ color: isFavorited ? "red" : "gray" }}  onClick={toggleFavorite}/>
      </div>
        <p className="valor-item">{valorProduto}</p>
      </div>
     
      
    
      <div className="add-carinho">
        <a href="" className="btn-carinho"> <AiOutlineShoppingCart/>Adicionar ao Carrinho</a>
      </div>
    </div>
  );
};

export default ItemShop;

