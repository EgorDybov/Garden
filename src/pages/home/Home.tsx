import { useEffect, useMemo, useState } from "react"
import { observer } from "mobx-react"

import { categoriesStore } from "../../stores/categories/categoriesStore"
import { CategoryItem } from "../../components/categoryItem/CategoryItem"
import { getRandomArray } from "../../utils/getRandomArray"
import { Banner } from "../../components/banner/Banner"
import { BannerEmail } from "../../components/bannerEmail/BannerEmail"

import { Product } from "../../components/product/Product"
import { IProduct } from "../../stores/products/types"
import { productsStore } from "../../stores/products/productsStore"

import './Home.css'

export const Home = observer(() => {

    const [saleProducts, setSalseProducts] = useState<IProduct[]>([])


    useEffect(() => {
        categoriesStore.GetAllCategories()
    }, [])

    const randomCategories = useMemo(() => {
        return getRandomArray(categoriesStore.categories, 4)
    }, [categoriesStore.categories])


    useEffect(() => {
        productsStore.GetAllProducts().then(data => {
            // 1. Найти все элементы со скидкой
            // 2. Из этого массива достать 4 штуки
                const discountProducts = data.filter((item) => {
                    return !!item.discont_price
                })

                const randomProducts = getRandomArray(discountProducts, 4)
                
                setSalseProducts(randomProducts)
                
            })
    }, [])


    return (
        <>
            <Banner/>
            <div className="random-categories__wrapper">
                <div className="container">
                <h1 className="random-categories__title">Популярные категории</h1>
                    <div className="random-categories__cards">
                        
                        {
                            randomCategories.map((randomCard) => {
                                return <CategoryItem {...randomCard}/>
                            })
                        }   
                    </div>
                </div>
            </div>
            
            <BannerEmail/>
            <div className="container">
                <div className="sales__wrapper">
                    <div className="sales__title">
                        <h2>Скидки</h2>
                    </div>
                    <div className="sales__items">
                        {
                            saleProducts.map((product) => {
                                return <Product {...product}/>
                            })
                        }
                    </div>
                    
                </div>
            </div>
        </>
        
    )
})