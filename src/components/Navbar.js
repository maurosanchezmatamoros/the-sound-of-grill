import TheSoundOfGrill from "./icons/TheSoundOfGrill"
import '../styles/NavbarMenu.css'
import { useState } from "react"
import { ModalReserva} from "./Reserva"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export const Navbar = () => {

    const [displayMenu, setDisplayMenu] = useState(false)
    const [navbarBack, setNavbarBack] = useState(false)

    const handleScroll = () => {
        window.scrollY > 50?
        setNavbarBack(true)
        :
        setNavbarBack(false)
    }

    window.addEventListener("scroll", handleScroll)

    const [show, setShow] = useState(false);
      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      

    return(
        <nav className={navbarBack? "navbarMenu navbarBack" : "navbarMenu"}>
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