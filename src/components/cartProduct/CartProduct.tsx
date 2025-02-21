import cartProduct from '../../assets/media/img/cartProduct.png'
import addIcon from '../../assets/media/icons/add_icon.svg'
import removeIcon from '../../assets/media/icons/remove_icon.svg'
import closeIcon from '../../assets/media/icons/close_icon.svg'

import './CartProduct.css'


export const CartProduct = () => {

    return (
        <div className="cartProduct">
            <div className="cartProduct__main-info">
                <div className="cartProduct__left">
                    <img src={cartProduct} alt="Крышка люка Пень средний полистоун" />
                    <div className="cartProduct__left__desc">
                        <p style={{width: 300, fontWeight: 500}}>Крышка люка Пень средний 
                        полистоун</p>
                        <div className="cartProduct__left__counter">
                            <button style={{backgroundColor: 'transparent', border: 'none', fontSize: 20, height:24, cursor: 'pointer'}}><img src={removeIcon} alt="minus"/></button>
                            <span style={{fontSize:20}}>1</span>
                            <button style={{backgroundColor: 'transparent', border: 'none', fontSize: 20, height:24, cursor: 'pointer'}}><img src={addIcon} alt="plus"/></button>
                        </div>
                    </div>
                </div>
                <div className="cartProduct__right">
                    <p className='sale__item__now-price'>1450р</p>
                    <p className='sale__item__prev-price'>1540р</p>
                </div>
            </div>
            <div className="cartProduct_delete-item">
                <img src={closeIcon} alt="delete" />
            </div>

        </div>
    )
}