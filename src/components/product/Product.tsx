import productImg from '../../assets/media/img/product.png'
import './Product.css'


export const Product = () => {
    return (
        <div className="product">
            <div className="product__img">
                <img src={productImg} alt="Secateurs" />
            </div>
            <div className="product__info">
                <div className="product__prices">
                    <span className='product__item__now-price'>500$</span>
                    <span className='product__item__prev-price'>1000$</span>
                    <span className='product__item__discount'>-7%</span>
                </div>
                <p className='product__item__title'>Secateurs</p>
            </div>
        </div>
    )
}