import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { observer } from "mobx-react"

import { Filters } from "../../components/filters/Filters"
import { Product } from "../../components/product/Product"
import { productsStore } from "../../stores/products/productsStore"
import { IProduct } from "../../stores/products/types"
import { categoriesStore } from "../../stores/categories/categoriesStore"

import './Products.css'

export const Products = observer(() => {

    const [products, setProducts] = useState<IProduct[]>([])

    const {categoryId} = useParams()

    const {pathname} = useLocation()
    

    // useEffect(() => {
    //     if(pathname === '/products'){
    //         productsStore.GetAllProducts().then(data => {
    //             setProducts(data)
    //         })
    //     }
    // }, [pathname])

    useEffect(() => {
        if(categoryId) {
           categoriesStore.GetCategory(categoryId).then(data => {
            setProducts(data)
           })
        }

        if(pathname === '/products'){
            productsStore.GetAllProducts().then(data => {
                setProducts(data)
            })
        }
    }, [categoryId, pathname])



    return (
        <section>
            <div className="container">
                <div className="products__wrapper">
                    <h2 style={{fontSize: 36}}>Инструменты и инвентарь</h2>
                    <Filters/>
                    <div className="products__list">
                        {
                            products.map((product) => {
                                return <Product key={product.id} {...product}/>
                            })
                        }
                    </div>
                
                </div>
            </div>
           
        </section>
    )
})