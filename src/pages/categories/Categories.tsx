import { useEffect, useState } from "react"
import { observer } from "mobx-react"

import { categoriesStore } from "../../stores/categories/categoriesStore"
import { CategoryItem } from "../../components/categoryItem/CategoryItem"
import { ICategory } from "stores/categories/types"

import './Categories.css'

interface ICustomCategory extends Omit<ICategory, ''> {
    isCustom: boolean
}


export const  Categories = observer(() => {
    const [cats, setCat] = useState<ICategory[]>([])
    

    useEffect(() => {
        categoriesStore.GetAllCategories().then(() => {
            const customCategories: ICustomCategory[] = [1, 2, 3].map(item => ({id: item, title: 'Временно отсутствует', image: 'https://placehold.co/400', isCustom: true}))
        
            setCat([...categoriesStore.categories, ...customCategories])
            
        })
    }, [])
    
    return (
        <section className="categories">
            <div className="container">
                <div className="categories__inner">
                    <div className="categories__title">
                        <h2>Категории</h2>
                    </div>
                    <div className="categories__wrapper">
                        {
                            cats.map((category) => {
                                return <CategoryItem key={category.id} {...category}/>
                            })
                        }
                    </div>
                    
                </div>
            </div>
        </section>
    )
})