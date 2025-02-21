export const  CartForm = () => {
    return (
        <div className="cart-counter" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding:20, border: '1px solid #252525', borderRadius: 10, width: 450, height: 300}}>
            <h4 style={{fontSize: 25}}>Детали заказа</h4>
            <div className="cart-counter__cost" style={{display: 'flex', justifyContent: 'space-between' , marginTop: 40}}>
                <p style={{fontSize: 18 ,fontWeight: 500}}>Сумма</p>
                <p style={{fontSize: 25 ,fontWeight: 600}}>4 977,00р</p>
            </div>
            <form>
                <input style={{width: '100%', height: 60, border: '1px solid #252525', borderRadius: 10, padding:10}} type="tel" required placeholder="Введите номер телефона"/>
                <button style={{width: '100%', height: 60, border: '1px solid #252525', borderRadius: 10, padding:10 , marginTop:20, fontSize: 20, backgroundColor: '#379634', color:"white", cursor: 'pointer'}}>Заказать</button>
            </form>
        </div>
    )
}