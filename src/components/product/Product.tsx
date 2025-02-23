import { IProduct } from 'stores/products/types'
import { BASE_URL, PRODUCTS_URL } from '../../stores/apiPoint'
import { useMemo } from 'react'
import { Button, Typography } from 'antd'

import './Product.css'
import { Link } from 'react-router-dom'

interface IProductProps extends IProduct {}

export const Product = ({price, discont_price, image, title, id}: IProductProps) => {

    const src = useMemo(() => {
        return BASE_URL + image
    }, [image, BASE_URL])

    const sale = useMemo(() => {
        return  discont_price && (discont_price * 100) / price - 100 
    }, [price, discont_price])

    const productUrl = useMemo(() => {
        return PRODUCTS_URL + "/" + id
    }, [id, PRODUCTS_URL])

    return (
        <div className="product">
            <Link to={productUrl} className="product__img">
                <img src={src} alt="Secateurs" />
            </Link>
            <div className="product__info">
                <div className="product__prices">
                    <span className='product__item__now-price'>{price}$</span>
                    {discont_price && <span className='product__item__prev-price'>{discont_price}$</span>}
                    {sale && <span className='product__item__discount'>{sale.toFixed(0)}</span>}
                </div>
                <Typography.Paragraph className='product__item__title' ellipsis>{title}</Typography.Paragraph>
                <Button type='primary'>В корзину</Button>
            </div>
        </div>
    )
}