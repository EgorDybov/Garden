
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react'

import { productsStore } from '../../stores/products/productsStore'
import { getSale } from '../../utils/getSale.ts'
import { BASE_URL } from '../../stores/apiPoint'

import './producCard.css'
import { toJS } from 'mobx'

export const ProductCard = observer(() => {
    const [title] = useState<string>(() => {
        if(productsStore.selectedProductCard){
            return productsStore.selectedProductCard.title
        } 
        return ''
    }) 

    const {productId} = useParams()
    
    useEffect(() => {
        productsStore.GetProductCard(productId).then()
    }, [])


    console.log('selected', toJS(productsStore.selectedProductCard));
    
    const sale = useCallback(() => {
        return  getSale(productsStore.selectedProductCard?.discont_price, productsStore.selectedProductCard?.price)
    }, [productsStore.selectedProductCard?.discont_price, productsStore.selectedProductCard?.price])

    const src = useMemo(() => {
        if(productsStore.selectedProductCard){
            return BASE_URL + productsStore.selectedProductCard.image
        }
    }, [productsStore.selectedProductCard, BASE_URL])
    

    return (
        <div className="product-card">
            <div className="container">
                <div className="product-card__wrapper">

                    <div className="product-card__name">
                        <h2>{title}</h2>
                        <img className='product-card__img' src={src} alt={title} />
                    </div>
                    
                    <div className="product-card__info">
                        <div className="product-card__prices">
                            <span className='product__item__now-price'>{productsStore.selectedProductCard?.discont_price}</span>
                            <span className='product__item__prev-price'>{productsStore.selectedProductCard?.price}$</span>
                            {sale && <span className='product__item__discount'>{sale()}%</span>}
                        </div>
                        <button className='product-card__btn'>В корзину</button>
                        <div className="divider"></div>
                        <div className="product-card__desc">
                            <p style={{fontSize:20, fontWeight:500}}>Описание</p>
                            <p style={{marginTop:20}}>{productsStore.selectedProductCard?.description}</p>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
})