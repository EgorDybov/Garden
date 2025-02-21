
import inst from '../../assets/media/icons/insta.svg'
import telegram from '../../assets/media/icons/telegram.svg'

import './FooterContacts.css'


export const FooterContacs = () => {
    return (
        <div className="footer__contacts">
            <div className="container">
                <div className="footer__contacts__wrapper">
                    <div className="footer__contacts__left">
                        <h3 className='footer__contacts__title'>Контакты</h3>
                        <p className='footer__contacts__number'>+7 999 999 99 99</p>
                        <div className="footer__contacts__apps">
                            <div className="footer__contacts__apps__intagram">
                                <img src={inst} alt="instagram" />
                                <p>instagram</p>
                            </div>
                            <div className="footer__contacts__apps__telegram">
                                <img src={telegram} alt="telegram" />
                                <p>Telefgram</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer__contacts__right">
                        <h3 className='footer__contacts__title'>Адрес</h3>
                        <p className='footer__contacts__address'>г. Космонавтов проезд Космонавтов, д.11</p>
                        <div className="footer__contacts__office-hours">
                            <p className='footer__contacts__office-hours__title'>Режим работы</p>
                            <p className='footer__contacts__office-hours__value'>Круглосуточно</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}