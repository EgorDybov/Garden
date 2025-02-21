import { CategoryItem } from "../../components/categoryItem/CategoryItem"
import './Categories.css'


export const  Categories = () => {
    return (
        <section className="categories">
            <div className="container">
                <div className="categories__inner">
                    <div className="categories__title">
                        <h2>Категории</h2>
                    </div>
                    <div className="categories__wrapper">
                        {
                            new Array(8).fill('').map(() => {
                                return <CategoryItem />
                            })
                        }
                    </div>
                    
                </div>
            </div>
        </section>
    )
}