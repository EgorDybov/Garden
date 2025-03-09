import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography } from 'antd'

import { IProduct } from '../../stores/products/types'
import { BASE_URL } from '../../stores/apiPoint'
import { cartStore } from '../../stores/cartStore/cartStore.ts'
import { ICartProduct } from '../../stores/cartStore/types.ts'
import { getSale } from '../../utils/getSale.ts'

import './Product.css'

interface IProductProps extends IProduct {}


export const Product = ({price, discont_price, image, title, id, description}: IProductProps) => {

    const src = useMemo(() => {
        return BASE_URL + image
    }, [image, BASE_URL])


    const sale = useMemo(() => {
        return  getSale(discont_price, price)
    }, [price, discont_price])


    const addToCart = () => {
        const someProduct: ICartProduct = {
            id, 
            count: 1,
            price,
            description,
            title,
            discont_price,
            image
        }
        cartStore.setProducts(someProduct)
    }

    return (
        <div className="product">
            <Link to={id.toString()} className="product__img">
                <img src={src} alt="Secateurs" />
            </Link>
            <div className="product__info">
                <div className="product__prices">
                    <span className='product__item__now-price'>{discont_price ?? price}$</span>
                    {discont_price && <span className='product__item__prev-price'>{price}$</span>}
                    {sale && <span className='product__item__discount'>{sale}%</span>}
                </div>
                <Typography.Paragraph className='product__item__title' ellipsis>{title}</Typography.Paragraph>
                <Button type='primary' className='product__btn' onClick={addToCart}>В корзину</Button>
            </div>
        </div>
    )
}