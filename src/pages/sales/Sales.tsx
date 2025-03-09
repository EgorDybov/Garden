
import { useEffect, useState } from 'react'

import { productsStore } from '../../stores/products/productsStore'
import { IProduct } from '../../stores/products/types'
import { Product } from '../../components/product/Product'

import './Sales.css'
import { observer } from 'mobx-react'

export const  Sales = observer(() => {

    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        productsStore.GetAllProducts().then(data => {
            // 1. Найти все элементы со скидкой
            // 2. Из этого массива достать 4 штуки
                const discountProducts = data.filter((item) => {
                    return !!item.discont_price
                })

                const randomProducts = discountProducts
                setProducts(randomProducts)
                
            })
    }, [])
    

    return (
        <section className="sales">
            <div className="container">
                <div className="sales__wrapper">
                    <div>
                        <h2 className='sales__title'>Скидки</h2>
                    </div>
                    <div className="sales__items">
                        {
                            products.map((product) => {
                                return <Product {...product}/>
                            })
                        }
                    </div>
                    
                </div>
            </div>
        </section>
    )
})