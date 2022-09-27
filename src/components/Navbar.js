import TheSoundOfGrill from "./icons/TheSoundOfGrill"
import '../styles/NavbarMenu.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useContext, useState } from "react"
import { Link } from 'react-scroll'
import { categoryContext } from "../App"

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

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
      
    const handleOnClick = (cat) => {
        setCategory(cat)
        setDisplayMenu(!displayMenu)
    }

    return(
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
      
            <Modal show={show} onHide={handleClose} size="sm">
              <Modal.Header closeButton>
                <Modal.Title>Haga su reserva</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
        </nav>
    )
}