import { Link } from 'react-scroll'
import '../styles/NavbarMobile.css'

export const NavbarMobile = ({ collapseMenu, setCollapseMenu, displayMenu, setDisplayMenu, handleOnClick, handleShow }) => {

    const handleOnClickReserva = () => {
        setCollapseMenu(false)
        handleShow()
    }

    return(
        <ul className={collapseMenu === false? 'menuMobileHidden' : 'menuMobile'}>
            <Link to="inicio" spy={true} smooth={true} offset={-50} duration={200} onClick={() => setCollapseMenu(false)}><li className="menuItemMobile">Inicio</li></Link>
            <li className="menuItemMobile" onClick={() => setDisplayMenu(!displayMenu)}>
                Menú <span className="material-symbols-outlined">expand_more</span>
            </li>
            {displayMenu? <ul className="dropMenuMobile">
                <Link to='menu' spy={true} smooth={true} offset={-60} duration={100} onClick={() => handleOnClick('destacados')}><li>Destacados</li></Link>
                <Link to='menu' spy={true} smooth={true} offset={-60} duration={100} onClick={() => handleOnClick('platos')}><li>Platos</li></Link>
                <Link to='menu' spy={true} smooth={true} offset={-60} duration={100} onClick={() => handleOnClick('postres')}><li>Postres</li></Link>
                <Link to='menu' spy={true} smooth={true} offset={-60} duration={100} onClick={() => handleOnClick('bebidas')}><li>Bebidas</li></Link>
            </ul> : null}
            <Link to="conocenos" spy={true} smooth={true} offset={-50} duration={200} ><li className="menuItemMobile" onClick={() => setCollapseMenu(false)}>Conocenos</li></Link>
            <Link to="contacto" spy={true} smooth={true} offset={-50} duration={200} ><li className="menuItemMobile" onClick={() => setCollapseMenu(false)}>Contacto</li></Link>
            <div className="menuItemMobile">
                <li className="reservarMobile" onClick={handleOnClickReserva}>RESERVAR</li>
            </div>
        </ul>
    )
}