import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import "./Style.css";

const ItemShop = ({ img, nomeProduto, valorProduto }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <div className="item-shop">
      <img src={img} alt={nomeProduto} className="item-shop-img" />
      <div className="item-name">
        <h3>{nomeProduto}</h3>
        <FaHeart className="
        icon-heart" style={{ color: isFavorited ? "red" : "gray" }}  onClick={toggleFavorite}/>
      </div>
      
      <p>{valorProduto}</p>
      <div className="add-carinho">
        <a href="" className="btn-carinho"> Adicionar ao carinho</a>
      </div>
    </div>
  );
};

export default ItemShop;

