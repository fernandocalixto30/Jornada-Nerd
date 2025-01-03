import './style.css'

const ItemShop = ({ img, NomeProduto, ValorProduto }) => {
    return (
        <div className="item-shop">
            <div className="item-shop-img">
                <img src={img} alt="" />
            </div>
            <div className=" item-shop-info">
                <div className="item-shop-info-text">
                    <h3>{NomeProduto}</h3>
                    <p>{ValorProduto}</p>
                </div>
                <div className='content-btn'>
                  <button className='item-shop-btn'>Adicionar ao Carrinho</button>   
                </div>
               
            </div>
        </div>
    )
}

export default ItemShop