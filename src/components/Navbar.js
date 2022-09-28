import TheSoundOfGrill from "./icons/TheSoundOfGrill"
import '../styles/NavbarMenu.css'
import { useContext, useState } from "react"
import { Link } from 'react-scroll'
import { categoryContext } from "../App"
import { ModalReserva } from "./Modal"

export const Navbar = () => {

    const [displayMenu, setDisplayMenu] = useState(false)
    const [navbarBack, setNavbarBack] = useState(false)
    const { setCategory } = useContext(categoryContext)

    const handleScroll = () => {
        window.scrollY > 50?
        setNavbarBack(true)
        :
        setNavbarBack(false)
    }

    window.addEventListener("scroll", handleScroll)
      
    const handleOnClick = (cat) => {
        setCategory(cat)
        setDisplayMenu(!displayMenu)
    }

    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);

    return(
      <>
        <nav className={navbarBack? "navbarMenu navbarBack" : "navbarMenu"}>
            <Link to='inicio' spy={true} smooth={true} offset={-60} duration={100}>
                <TheSoundOfGrill fill={'#fff'} id='logoHome'/>
            </Link>
            <ul className='menu'>
                <Link to="inicio" spy={true} smooth={true} offset={-50} duration={200} ><li className="menuItem">Inicio</li></Link>
                <li className="menuItem" onClick={() => setDisplayMenu(!displayMenu)}>
                    Menú <span className="material-symbols-outlined">expand_more</span>
                    {displayMenu? <ul className="dropMenu">
                        <Link to='menu' spy={true} smooth={true} offset={-60} duration={100} onClick={() => handleOnClick('destacados')}><li>Destacados</li></Link>
                        <Link to='menu' spy={true} smooth={true} offset={-60} duration={100} onClick={() => handleOnClick('platos')}><li>Platos</li></Link>
                        <Link to='menu' spy={true} smooth={true} offset={-60} duration={100} onClick={() => handleOnClick('postres')}><li>Postres</li></Link>
                        <Link to='menu' spy={true} smooth={true} offset={-60} duration={100} onClick={() => handleOnClick('bebidas')}><li>Bebidas</li></Link>
                    </ul> : null}
                </li>
                <Link to="conocenos" spy={true} smooth={true} offset={-50} duration={200} ><li className="menuItem">Conocenos</li></Link>
                <Link to="contacto" spy={true} smooth={true} offset={-50} duration={200} ><li className="menuItem">Contacto</li></Link>
                <li className="menuItem reservar" onClick={handleShow}>RESERVAR</li>
            </ul>
            
        </nav>
        <ModalReserva isOpen={show} close={handleClose}/>
      </>
    )
}