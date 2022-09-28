import { Container, Row, Col } from 'react-bootstrap'
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2"

//styles
import "../styles/Footer.css"
//icons
import { MdMailOutline, MdCall, MdLocationOn } from "react-icons/md"
import { ReactComponent as Logo } from "../img/logo.svg"


export const Footer = () => {

    return (
        <>
            <Container fluid className="footer" id='contacto'>
                <Row className="p-5">
                    <Col md={4} sm={12} className="footer-section1 px-5 py-4">
                        <div >
                            <Logo className='logo'/>
                        </div>
                        <p className="text-center text-md-start">Los mejores cortes de carne y los mojitos más deliciosos de todo Tepoztlán.</p>
                    </Col>
                    <Col md={4} sm={12} className="footer-section2 px-5 py-4">
                        <div className="d-flex justify-content-md-center">
                            <div>
                                <h3 className="text-light">CONTACTO</h3>
                                <div>
                                    <button >
                                        <CopyToClipboard
                                            text="+442 664 4217"
                                            onCopy={() => Swal.fire({
                                                title: "Copied!",
                                                background: '#161616',
                                                showConfirmButton: false,
                                                width: "200px",
                                                timer:1100,
                                            })}>
                                            <span data-hover="copy to clipboard" className="hovertext"><MdCall size={18}/>+442 664 4217</span>
                                        </CopyToClipboard>
                                    </button>
                                </div>
                                <div>
                                    <button onClick={() => window.location.href = 'mailto:thesoundofgrill@gmail.com'}>
                                        <span data-hover="Mail to" className="hovertext"><MdMailOutline size={18}/> thesoundofgrill@gmail.com</span>
                                    </button>
                                </div>
                                <p><MdLocationOn size={18}/> 62520, Del Tepozteco 25, Santisima Trinidad, 62520 Tepoztlán, Mor., México.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12} className="footer-section3 px-5 py-4">
                        <div className="">
                            <div>
                                <h3 className="text-light">HORARIO</h3>
                                <Row className='d-flex justify-content-between'>
                                    <dl>
                                        <dt>Jueves </dt>
                                        <dd> 11:00 - 20:00</dd>
                                        <dt>Viernes </dt>
                                        <dd> 11:00 - 20:00</dd>
                                        <dt>Sábado </dt>
                                        <dd> 11:00 - 21:00</dd>
                                        <dt>Domingo </dt>
                                        <dd> 11:00 - 21:00</dd>
                                    </dl>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="p-5 footer-map">
                    <Col className="justify-content-center px-5">
                        <iframe className='w-100 h-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4543.572305580706!2d-99.10254159605253!3d18.98879462455438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0df76ef765e3%3A0x399c4ff048fe4ff9!2sThe%20Sound%20of%20Grill!5e0!3m2!1ses-419!2sar!4v1662766869479!5m2!1ses-419!2sar"></iframe>
                    </Col>
                </Row>
                <Row className=" footer-info">
                    <Row className="justify-content-center align-items-center">
                        <p className="text-center">© 2022 The Sound of Grill - Diseño y Desarrollo</p>
                    </Row>
                </Row>
            </Container>
        </>
    )
}
