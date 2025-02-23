import productCard from '../../assets/media/img/productCard.png'
import { useEffect } from 'react'
import { productsStore } from 'stores/products/productsStore'
import { useParams } from 'react-router-dom'

import './producCard.css'


export const ProductCard = () => {

    const {productId} = useParams()
    

    useEffect(()=>{
        productsStore?.GetProductCard(productId)
    }, [])


    return (
        <div className="product-card">
            <div className="container">
                <div className="product-card__wrapper">

                    <div className="product-card__name">
                        <h2>Совковая лопата</h2>
                        <img className='product-card__img' src={productCard} alt="Совковая лопата" />
                    </div>
                    
                    <div className="product-card__info">
                        <div className="product-card__prices">
                            <span className='product__item__now-price'>500$</span>
                            <span className='product__item__prev-price'>{productsStore?.selectedProductCard.price}$</span>
                            <span className='product__item__discount'>-7%</span>
                        </div>
                        <button className='product-card__btn'>В корзину</button>
                        <div className="divider"></div>
                        <div className="product-card__desc">
                            <p style={{fontSize:20, fontWeight:500}}>Описание</p>
                            <p style={{marginTop:20}}>Размер, см - 45х33 Материал: Полимер морозостойкий, усиленный стальной оцинкованной планкой, прикрепленной к полотну клепкой, аллюминиевый черенок с V-образной ручкой.</p>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}