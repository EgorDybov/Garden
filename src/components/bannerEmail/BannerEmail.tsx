import './BanenrEmail.css'


export const BannerEmail = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__wraper">
                    <div className="banner__info">
                        <h2 className='banner__title'>Заполни форму и <span>получи</span> скидку <span className='salePercent'>20%</span></h2>
                        <p></p>
                    </div>
                    <div className="banner__form">
                        <form className='form'>
                            <div className="form__inputs">
                                <div className="form__inputs__up">
                                    <input className="banner__input" type="text" placeholder='Имя'/>
                                    <input className="banner__input" type="text" placeholder='Фамилия'/>
                                </div>
                            
                                <div className="form__inputs__bottom">
                                    <input className="banner__input" type="email " placeholder='Email'/>
                                    <input className="banner__input" type="tel" placeholder='Телефон'/>
                                </div>
                            </div>
                            

                            <button className="banner__btn" type="submit">Получить скидку</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}