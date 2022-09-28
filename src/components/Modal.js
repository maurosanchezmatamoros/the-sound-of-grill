import { Modal, Form, Row, Col, Container } from 'react-bootstrap';
import "../styles/Modal.css"
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2"
import { MdSchedule, MdCall, MdLocationOn } from "react-icons/md"

export const ModalReserva = ({isOpen,close}) => {
 

    return(
        <Modal show={isOpen} onHide={close} size={"xl"}>
        <Modal.Header closeButton>
          <Modal.Title className='ms-3'>RESERVA TU MESA</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <Form>
                            <Row>
                                <Col xs={12} md={6}>    
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" md={4}>
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            autoFocus
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>    
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" md={4}>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder=""
                                            autoFocus
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>    
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" md={4}>
                                        <Form.Label>Teléfono</Form.Label>
                                        <Form.Control
                                            type="phone"
                                            placeholder=""
                                            autoFocus
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>    
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" md={4}>
                                        <Form.Label>Personas</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder=""
                                            autoFocus
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>    
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" md={4}>
                                        <Form.Label>Fecha</Form.Label>
                                        <Form.Control
                                            type="date"
                                            placeholder=""
                                            autoFocus                   
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>    
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" md={4}>
                                        <Form.Label>Hora</Form.Label>
                                        <Form.Select>
                                            <option>11:00</option>
                                            <option>12:00</option>
                                            <option>13:00</option>
                                            <option>14:00</option>
                                            <option>15:00</option>
                                            <option>16:00</option>
                                            <option>17:00</option>
                                            <option>18:00</option>
                                            <option>19:00</option>
                                            <option>20:00</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col xl={12}>    
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" md={4}>
                                        <Form.Label>Mensaje</Form.Label>
                                        <Form.Control
                                            placeholder=""
                                            autoFocus
                                            as="textarea" 
                                            rows={3}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col xs={12} md={4} className='ps-3 pe-2'>
                        <h5><MdSchedule size={18}/> HORARIO</h5>
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
                        <div >
                        <h5><MdLocationOn size={18}/> DIRECCIÓN</h5>
                            <button onClick={() => window.open("https://www.google.com/maps?ll=18.989144,-99.100842&z=15&t=m&hl=es-419&gl=AR&mapclient=embed&cid=4151280849964126201")}>
                            <p className='text-start' data-hover="Ir a Maps">62520, Del Tepozteco 25, Tepoztlán, México..</p>
                            </button>
                        </div>
                        <div>
                        <h5><MdCall size={18}/> TELÉFONO</h5>
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
                                    <span data-hover="Copiar" className="hovertext">+442 664 4217</span>
                                </CopyToClipboard>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer className='justify-content-start'>
            <li className="menuItem reservar" onClick={close}>RESERVAR</li>
        </Modal.Footer>
      </Modal>
    )
}