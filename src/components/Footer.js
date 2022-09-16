import { Container, Row, Col } from 'react-bootstrap'
//styles
import "../styles/footer.css"
//icons
import { MdMailOutline, MdCall, MdLocationOn } from "react-icons/md"
import { ReactComponent as Logo } from "../img/logo.svg"

export const Footer = () => {


    return (
        <>
            <Container fluid className="footer">
                <Row className="p-5">
                    <Col md={4} sm={12} className="footer-section1 p-3">
                        <div >
                            <Logo className='logo' width={300}/>
                        </div>
                        <p className="text-center text-md-start">Los mejores cortes de carne y los mojitos más deliciosos de todo Tepoztlán.</p>
                    </Col>
                    <Col md={4} sm={12} className="footer-section2 p-3">
                        <h3 className="text-light">CONTACTO</h3>
                        <p><MdCall size={18}/>+442 664 4217</p>
                        <p><MdMailOutline size={18}/> thesoundofgrill@gmail.com</p>
                        <p><MdLocationOn size={18}/> 62520, Del Tepozteco 25,<br />Santisima Trinidad, 62520 <br /> Tepoztlán, Mor., México.</p>
                    </Col>
                    <Col md={4} sm={12} className="footer-section3 p-3">
                        <Row className="justify-content-end">
                            <h3 className="text-light">HORARIO</h3>
                            <p>Jueves ................................ 11:00 - 20:00</p>
                            <p>Viernes ............................... 11:00 - 20:00</p>
                            <p>Sábado ................................ 11:00 - 20:00</p>
                            <p>Domingo .............................. 11:00 - 20:00</p>
                        </Row>
                    </Col>
                </Row>
                <Row className="p-5 footer-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4543.572305580706!2d-99.10254159605253!3d18.98879462455438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0df76ef765e3%3A0x399c4ff048fe4ff9!2sThe%20Sound%20of%20Grill!5e0!3m2!1ses-419!2sar!4v1662766869479!5m2!1ses-419!2sar"></iframe>
                </Row>
            </Container>
        </>
    )
}
