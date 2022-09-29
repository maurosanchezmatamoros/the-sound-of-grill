import { Container, Row, Col } from 'react-bootstrap'
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2"
import "../styles/Footer.css"
import { MdMailOutline, MdCall, MdLocationOn } from "react-icons/md"
/* import { ReactComponent as Logo } from "../../public/assets/svg/logo_footer.svg" */
import LogoFooter from './icons/LogoFooter';

export const Footer = () => {

    return (
        <>
            <Container fluid className="footer" id='contacto'>
                <Row className="mx-3 px-2 py-3 mx-md-4 px-md-3 py-md-5 mx-lg-5 px-lg-4">
                    <Col md={4} sm={12} className="footer-section1 px-3 px-md-4 py-4">
                        <div >
                            <LogoFooter className='logo'/>
                        </div>
                        <p className="text-center text-md-start">Los mejores cortes de carne y los mojitos más deliciosos de todo Tepoztlán.</p>
                    </Col>
                    <Col md={4} sm={12} className="footer-section2 px-3 px-md-4 py-4">
                        <div className="d-flex justify-content-md-center">
                            <div>
                                <h3 className="text-light">CONTACTO</h3>
                                <div>
                                    <button className='text-start'>
                                        <CopyToClipboard
                                            text="+442 664 4217"
                                            onCopy={() => Swal.fire({
                                                title: "Copied!",
                                                background: '#161616',
                                                showConfirmButton: false,
                                                width: "200px",
                                                timer:1100,
                                            })}>
                                            <span data-hover="Copiar" className="hovertext"><MdCall size={18}/>+442 664 4217</span>
                                        </CopyToClipboard>
                                    </button>
                                </div>
                                <div>
                                    <button className='text-start' onClick={() => window.location.href = 'mailto:thesoundofgrill@gmail.com'}>
                                        <span data-hover="Mail to" className="hovertext"><MdMailOutline size={18}/> thesoundofgrill@gmail.com</span>
                                    </button>
                                </div>
                                <div >
                                    <button className='text-start' onClick={() => window.open("https://www.google.com/maps?ll=18.989144,-99.100842&z=15&t=m&hl=es-419&gl=AR&mapclient=embed&cid=4151280849964126201")}>
                                        <span data-hover="Ir a Maps" className="hovertext"><MdLocationOn size={18}/> 62520, Del Tepozteco 25, Tepoztlán, México..</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12} className="footer-section3 px-3 px-md-4 py-4">
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
                <Row className="mx-3 px-2 py-3 mx-md-4 px-md-3 py-md-5 mx-lg-5 px-lg-4 footer-map">
                    <Col className="justify-content-center px-3 px-md-4">
                        <iframe className='w-100 h-100' title="maps-sog" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4543.572305580706!2d-99.10254159605253!3d18.98879462455438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0df76ef765e3%3A0x399c4ff048fe4ff9!2sThe%20Sound%20of%20Grill!5e0!3m2!1ses-419!2sar!4v1662766869479!5m2!1ses-419!2sar"></iframe>
                    </Col>
                </Row>
                <Row className="footer-info">
                    <Row className="justify-content-center align-items-center">
                        <p className="text-center">© 2022 The Sound of Grill - Diseño y Desarrollo</p>
                    </Row>
                </Row>
            </Container>
        </>
    )
}
