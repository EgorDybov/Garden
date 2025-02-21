import { INav } from "./types"
import { useState } from "react"
import './Nav.css'
import { Link } from "react-router-dom"

export const Nav = ({items}: INav) => {

    const [linkIndex, setLinkIndex] = useState(0)

    const handleClick = (index: any) => {
        setLinkIndex(index)
    }

    return (
        <nav>
            <ul className="nav__links">
                {items.map((item, index) => {
                    return <Link to={item.path} onClick={() => handleClick(index)} key={index} className={linkIndex === index ? 'nav__link active-link': ''}>{item.name}</Link>
                })}
            </ul>
        </nav>
    )
}