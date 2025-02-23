import { useEffect } from "react"
import { Filters } from "../../components/filters/Filters"
import { Product } from "../../components/product/Product"
import './Products.css'
import { productsStore } from "../../stores/products/productsStore"
import { observer } from "mobx-react"


export const Products = observer(() => {

    useEffect(() => {
        productsStore.GetAllProducts()
    }, [])

    return (
        <section>
            <div className="container">
                <div className="products__wrapper">
                    <h2 style={{fontSize: 36}}>Инструменты и инвентарь</h2>
                    <Filters/>
                    <div className="products__list">
                        {
                            productsStore.products.map((product) => {
                                return <Product {...product}/>
                            })
                        }
                    </div>
                
                </div>
            </div>
           
        </section>
    )
})