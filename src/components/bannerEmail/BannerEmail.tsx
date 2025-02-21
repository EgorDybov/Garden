import img from '../../assets/media/img/banner_discount_img.png'

import './BanenrEmail.css'


export const BannerEmail = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__wraper">
                    <img src={img} alt="banner" />
                    <div className="banner__form">
                        <h3 className='banner__title'>Скидка 5%<br/> на первый заказ</h3>
                        <form>
                            <input className="banner__input" type="tel" placeholder='+7'/>
                            <button className="banner__btn" type="submit">Получить скидку</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}