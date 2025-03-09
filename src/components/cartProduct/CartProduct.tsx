import cartProduct from '../../assets/media/img/cartProduct.png'
import addIcon from '../../assets/media/icons/add_icon.svg'
import removeIcon from '../../assets/media/icons/remove_icon.svg'
import closeIcon from '../../assets/media/icons/close_icon.svg'

import { ICartProduct } from '../../stores/cartStore/types'
import { BASE_URL } from '../../stores/apiPoint'

import './CartProduct.css'
import { useMemo } from 'react'

export const CartProduct = ({count, price, title, discont_price, image}: ICartProduct) => {

    const scr = useMemo(() => {
        return BASE_URL + image
    }, [image, BASE_URL])


    

    return (
        <div className="cartProduct">
            <div className="cartProduct__main-info">
                <div className="cartProduct__left">
                    <img className='' src={scr} alt={title} />
                    <div className="cartProduct__left__desc">
                        <p style={{width: 300, fontWeight: 500}}>{title}</p>
                        <div className="cartProduct__left__counter">
                            <button style={{backgroundColor: 'transparent', border: 'none', fontSize: 20, height:24, cursor: 'pointer'}}><img className='minus' src={removeIcon} alt="minus"/></button>
                            <span style={{fontSize:20}}>{count}</span>
                            <button style={{backgroundColor: 'transparent', border: 'none', fontSize: 20, height:24, cursor: 'pointer'}}><img className='plus' src={addIcon} alt="plus"/></button>
                        </div>
                    </div>
                </div>
                <div className="cartProduct__right">
                    <p className='sale__item__now-price'>{discont_price}</p>
                    <p className='sale__item__prev-price'>{price}</p>
                </div>
            </div>
            <div className="cartProduct_delete-item">
                <img className='' src={closeIcon} alt="delete" />
            </div>

        </div>
    )
}