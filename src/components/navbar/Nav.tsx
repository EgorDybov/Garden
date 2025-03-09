import { INav } from "./types"
import { useCallback, useEffect, useMemo, useState } from "react"
import './Nav.css'
import { Link, useLocation } from "react-router-dom"
import { navStore } from "../../stores/navStore/NavStore"
import { observer } from "mobx-react"

export const Nav = observer(({items}: INav) => {

    // const [linkIndex, setLinkIndex] = useState(0)

    const {pathname} = useLocation()


    useEffect(()=>{
         navStore.setActiveLink(pathname)
    }, [pathname])


    const className = (path: string) => {
        const link = !path.includes('/') ? '/'+path : path
        return navStore.activeLink === link ? 'nav__link active-link': ''   
     }
    

    


  

    return (
        <nav>
            <ul className="nav__links">
                {items.map((item, index) => {
                    return <Link to={item.path}
                        key={index}
                        className={className(item.path)}>{item.name}</Link>
                })}
            </ul>
        </nav>
    )
}) 