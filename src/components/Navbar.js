import TheSoundOfGrill from "./icons/TheSoundOfGrill"
import '../styles/NavbarMenu.css'
import { useContext, useState } from "react"
import { Link } from 'react-scroll'
import { categoryContext } from "../App"
import { NavbarMobile } from "./index"
import { ModalReserva } from "./Modal"

export const Navbar = () => {

    const [displayMenu, setDisplayMenu] = useState(false)
    const [navbarBack, setNavbarBack] = useState(false)
    const [collapseMenu, setCollapseMenu] = useState(false)
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
        setCollapseMenu(false)
    }

    const handleOnClickMenu = () => {
        setCollapseMenu(!collapseMenu)
        if (navbarBack === false) setNavbarBack(true)
    }

    
    const handleShow = () => {setNavbarBack(false); setShow(true) };
    const handleClose = () => {setShow(false); setTimeout(() => {
        setNavbarBack(true)
    }, 200)};
    const [show, setShow] = useState(false);

    return(
        <nav>
            <div className={navbarBack? "navbarMenu navbarBack" : "navbarMenu"}>
                <Link to='inicio' spy={true} smooth={true} offset={-60} duration={100}>
                    <TheSoundOfGrill fill={'#fff'} id='logoHome'/>
                </Link>
                <img onClick={handleOnClickMenu} className="hamburgerMenuIcon" src='./assets/svg/menu.svg' alt="hamburger menu"/>
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
                    <li className="menuItem reservar">RESERVAR</li>
                </ul>
            </div>
            <NavbarMobile
            collapseMenu={collapseMenu}
            setCollapseMenu={setCollapseMenu}
            displayMenu={displayMenu}
            setDisplayMenu={setDisplayMenu}
            handleOnClick={handleOnClick} />
        </nav>
        <ModalReserva isOpen={show} close={handleClose}/>
      </>
    )
}