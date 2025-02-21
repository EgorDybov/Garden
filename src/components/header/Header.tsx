import { useMemo } from "react"
import { Nav } from "../navbar/Nav"
import './Header.css'
import { Button } from "antd";
import { Link } from "react-router-dom";
import { menu } from "./constants";

export const Header = () => {
    
    const logo = useMemo(() => {
        return '../src/assets/media/icons/logo.svg'
    }, [])

    const shoppingCart = useMemo(() => {
        return '../src/assets/media/icons/shopping_bag.svg'
    }, [])

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__right">
                    <Link to={'/'}>
                        <img className="header__logo" src={logo} alt="logo" />
                    </Link>
                    <Link to={'categories'}>
                        <Button color="green">Каталог</Button>
                    </Link>
                </div>
                <div className="header__left">
                    <Nav items={menu}/>
                    <Link to={'cart'}>
                        <img className="header__cart-icon" src={shoppingCart} alt="shopping cart" />
                    </Link>
                    
                </div>
            </div>
        </header>
    )
}