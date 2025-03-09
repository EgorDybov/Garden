
import { Link } from "react-router-dom"
import { CartProduct } from "../../components/cartProduct/CartProduct"
import { CartForm } from "../../components/cartForm/CartForm"
import arrow from '../../assets/media/icons/chevron_right.svg'

import './Cart.css'
import { cartStore } from "../../stores/cartStore/cartStore"
import { observer } from "mobx-react"

export const Cart = observer(() => {

    console.log(cartStore.products);
    
    return (
        <div className="cart">
            <div className="container">
                <div className="cart__wrapper">
                    <h2 style={{marginTop: 80, fontSize: 36}} >Корзина</h2>
                    <div className="cart__navigation" style={{width: 825, justifyContent: 'space-between', marginTop: 20}}>
                        <div className="">
                            <Link to={'/'} style={{fontWeight: 500}}>Главная </Link>
                            /
                            <Link to={'/cart'} style={{fontWeight: 500}}> Корзина</Link>
                        </div>
                        <div className="">
                            <Link to={'/products'} className="cart__navigation__return-arrow">Вернуться в магазин <img src={arrow} alt="" /></Link>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                        <div >
                            {cartStore.products.map((product) => {
                                return <CartProduct {...product} key={product.id}/>
                            })}
                            
                        </div>
                        <CartForm/>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
})