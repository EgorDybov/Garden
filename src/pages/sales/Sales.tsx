import { Saleitem } from "../../components/saleItem/SaleItem"

import './Sales.css'

export const  Sales = () => {
    return (
        <section className="sales">
            <div className="container">
                <div className="sales__wrapper">
                    <div className="sales__title">
                        <h2>Скидки</h2>
                    </div>
                    <div className="sales__items">
                        {
                            new Array(4).fill('').map(() => {
                                return <Saleitem />
                            })
                        }
                    </div>
                    
                </div>
            </div>
        </section>
    )
}