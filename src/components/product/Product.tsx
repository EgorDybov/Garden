import { useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography } from 'antd'

import { IProduct } from '../../stores/products/types'
import { BASE_URL, PRODUCTS_URL } from '../../stores/apiPoint'
import { getSale } from '../../utils/getSale.ts'

import './Product.css'

interface IProductProps extends IProduct {}

export const Product = ({price, discont_price, image, title, id}: IProductProps) => {

    const src = useMemo(() => {
        return BASE_URL + image
    }, [image, BASE_URL])

    const sale = useCallback(() => {
        return  getSale(discont_price, price)
    }, [price, discont_price])

   
    const productUrl = useMemo(() => {
        return PRODUCTS_URL + "/" + id
    }, [id, PRODUCTS_URL])

    return (
        <div className="product">
            <Link to={'1'} className="product__img">
                <img src={src} alt="Secateurs" />
            </Link>
            <div className="product__info">
                <div className="product__prices">
                    <span className='product__item__now-price'>{price}$</span>
                    {discont_price && <span className='product__item__prev-price'>{discont_price}$</span>}
                    {sale && <span className='product__item__discount'>{sale()}%</span>}
                </div>
                <Typography.Paragraph className='product__item__title' ellipsis>{title}</Typography.Paragraph>
                <Button type='primary'>В корзину</Button>
            </div>
        </div>
    )
}