import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { RightOutlined } from '@ant-design/icons'

import mainImg from '../../assets/media/img/plantImg.png'

import './Banner.css'

export const Banner = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__wrapper">
                    <div className="main__left">
                        <h1 className='main__title'>Make Your Space<br/><span className='main__title-mainPhrase'>Greener 🌱</span><br />With <span className='main__title-endPhrase'>Plants</span></h1>
                        <div className="main__btns">
                            <Link to={'sales'}>
                                <Button className='main__btn-sales' color='primary' variant="solid">Все акции <RightOutlined style={{fontSize: '20px'}}/></Button>
                            </Link>
                            <Link to={'more'}>
                                <Button className='main__btn-more' color='primary'>Подробнее</Button>
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
