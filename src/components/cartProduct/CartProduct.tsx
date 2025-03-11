import { useMemo, useState } from 'react'
import cartProduct from '../../assets/media/img/cartProduct.png'
import addIcon from '../../assets/media/icons/add_icon.svg'
import removeIcon from '../../assets/media/icons/remove_icon.svg'
import closeIcon from '../../assets/media/icons/close_icon.svg'

import { ICartProduct } from '../../stores/cartStore/types'
import { BASE_URL } from '../../stores/apiPoint'
import { cartStore } from '../../stores/cartStore/cartStore'

import './CartProduct.css'
import { observer } from 'mobx-react'

export const CartProduct = observer(({id, count, price, title, discont_price, image}: ICartProduct) => {

    console.log(count);
    

    const scr = useMemo(() => {
        return BASE_URL + image
    }, [image, BASE_URL])



    const increment = () => {
        cartStore.incrementProduct(id)
    }

    const decrement = () => {
        cartStore.decrementProduct(id)
    }

    const handleDelete = () => {
        cartStore.deleteProduct(id)
    }

    

    return (
        <div className="cartProduct">
            <div className="cartProduct__main-info">
                <div className="cartProduct__left">
                    <img className='' src={scr} alt={title} />
                    <div className="cartProduct__left__desc">
                        <p style={{width: 300, fontWeight: 500, fontSize: 28}}>{title}</p>
                        <div className="cartProduct__left__counter">
                            <button 
                                onClick={decrement} 
                                style={{backgroundColor: 'transparent', border: 'none', fontSize: 20, width:24,height: 24 ,cursor: 'pointer'}}><img className='minus' src={removeIcon} alt="minus"/>
                            </button>
                            <span style={{fontSize:20}}>{count}</span>
                            <button 
                                onClick={increment} 
                                style={{backgroundColor: 'transparent', border: 'none', fontSize: 20, width:24, height: 24 , cursor: 'pointer'}}><img className='plus' src={addIcon} alt="plus"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="cartProduct__right">
                    {discont_price 
                    ? <p className='sale__item__now-price'>{discont_price}$</p>
                    : <p className='sale__item__now-price'>{price}$</p>}
                   {discont_price && <p className='sale__item__prev-price'>{price}$</p>}
                </div>
            </div>
            <button onClick={handleDelete} className="cartProduct_delete-item">
                <img className='' src={closeIcon} alt="delete" />
            </button>

        </div>
    )
})