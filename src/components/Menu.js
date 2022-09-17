import { Container, Row, Col } from 'react-bootstrap'

//styles
import "../styles/Menus.css"


export const Menu = () => {
   
    return (
        <>
            <Container fluid className="menu">
                <Row className="p-5">
                    <Col md={4} sm={12} className="footer-section1 px-5 py-4">
                        <div >
                           
                        </div>
                        <p className="text-center text-md-start">Los mejores cortes de carne y los mojitos más deliciosos de todo Tepoztlán.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
