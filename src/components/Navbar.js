import TheSoundOfGrill from "./icons/TheSoundOfGrill"
import '../styles/NavbarMenu.css'
import { useState } from "react"

export const Navbar = () => {

    const [displayMenu, setDisplayMenu] = useState(false)

    return(
        <nav className="navbarMenu">
            <TheSoundOfGrill fill={'#fff'}/>
            <ul className='menu'>
                <li className="menuItem">Inicio</li>
                <li className="menuItem" onClick={() => setDisplayMenu(!displayMenu)}>
                    Menú <span className="material-symbols-outlined">expand_more</span>
                    {displayMenu? <ul className="dropMenu">
                        <li>Destacados</li>
                        <li>Platos</li>
                        <li>Postres</li>
                        <li>Bebidas</li>
                    </ul> : null}
                </li>
                <li className="menuItem">Conocenos</li>
                <li className="menuItem">Contacto</li>
                <li className="menuItem reservar">RESERVAR</li>
            </ul>
        </nav>
    )
}