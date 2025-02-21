import './SaleItem.css'

import saleImg from '../../assets/media/img/sale_img.png'
import { Link } from 'react-router-dom'


export  const Saleitem = () => {
    return (
        <div className="sale__item">
            <Link to={'/product'}><img src={saleImg} alt="Decorative forged bridge" /></Link>
            <div className="sale__info">
                <div className="sale__prices">
                    <span className='sale__item__now-price'>500$</span>
                    <span className='sale__item__prev-price'>1000$</span>
                    <span className='sale__item__discount'>-7%</span>
                </div>
                <p className='sale__item__title'>Decorative forged bridge</p>
            </div>
        </div>
    )
}