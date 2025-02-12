

import './style.css'
import Header from './../../components/Header/index';
import ShopCarousel from '../../components/ShopCarousel';
import Footer from '../../components/Footer';
import Carosel from '../../components/carosel';
const HomePage = () => {
    return (
        <>
            <Header />

            <Carosel  />

            <section className="container-shop">
                <div className="item-shop-info-text">
                    <h2>Shop</h2>
                </div>
                <ShopCarousel/>
                <ShopCarousel />
            </section>
            <Footer />
        </>
    )
}

export default HomePage                  