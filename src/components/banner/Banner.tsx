import { Button } from 'antd'

import mainImg from '../../assets/media/img/main__img.png'
import './Banner.css'
import { Link } from 'react-router-dom'

export const Banner = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__wrapper">
                    <div className="main__left">
                        <h1 className='main__title'>Распродажа в честь нового сезона</h1>
                        <div className="main__btns">
                            <Link to={'sales'}>
                                <Button className='main__btn-sales'>Все акции</Button>
                            </Link>
                            <Link to={'more'}>
                                <Button className='main__btn-more'>Подробнее</Button>
                            </Link>
                            
                        </div>
                    </div>
                    <div className="main__right">
                        <img className='main__img' src={mainImg} alt="mainImg" />
                    </div>
                </div>
            </div>
        </main>
    )
}
