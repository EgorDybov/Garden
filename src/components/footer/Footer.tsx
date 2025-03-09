import { Mapty } from "../../components/map/Map"
import { FooterContacs } from "../footerContacts/FooterContacts"

import './Footer.css'


export const Footer = () => {
    return (
        <footer className="footer">
            <FooterContacs/>
            <Mapty/>
        </footer>
    )
}