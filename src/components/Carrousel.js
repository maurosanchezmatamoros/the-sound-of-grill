import '../styles/Carrousel.css'
import Carousel from 'react-bootstrap/Carousel'

export const Carrousel = () => {
    return (
        <section style={{ backgroundImage: `url(/assets/images/fondoHome.png)` }} className='carouselContainer'>
            <Carousel>
                <Carousel.Item>
                    <div className='carouselCommentContainer'>
                        <h4>Abigail Ascencio</h4>
                        <h6>Hace 6 meses</h6>
                        <p>Excelente lugar para comer, es tranquilo y tienen buena separación las mesas, la atención es excelente y la comida muy rica a precios accesibles. Nos encantaron los mojitos, todos muy ricos. Sin duda recomiendo este lugar.</p>
                        <div>
                            <img src='/assets/svg/star.svg' alt='star'></img>
                            <img src='/assets/svg/star.svg' alt='star'></img>
                            <img src='/assets/svg/star.svg' alt='star'></img>
                            <img src='/assets/svg/star.svg' alt='star'></img>
                            <img src='/assets/svg/star.svg' alt='star'></img>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='carouselCommentContainer'>
                        <h4>Dulce Zuleima Barona Flores</h4>
                        <h6>Hace 7 meses</h6>
                        <p>los mejores mojitos de Tepoztlán, comida deliciosa, precios accesibles, excelente ubicación, a gusto para venir con la familia y echarte unos tragos.</p>
                        <div>
                            <img src='/assets/svg/star.svg' alt='star'></img>
                            <img src='/assets/svg/star.svg' alt='star'></img>
                            <img src='/assets/svg/star.svg' alt='star'></img>
                            <img src='/assets/svg/star.svg' alt='star'></img>
                            <img src='/assets/svg/star.svg' alt='star'></img>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='carouselCommentContainer'>
                        <h4>Demaris Lopez</h4>
                        <h6>Hace 10 meses</h6>
                        <p>Excelente lugar, muy rica la comida y los mojitos son deliciosos, cada que voy a tepoz no puede faltar pasar por un mojito, excelente servicio y atencion de Rebeca y Aldo, sin duda recomendado.</p>
                        <div>
                            <img src='/assets/svg/star.svg' alt='star'></img>
                            <img src='/assets/svg/star.svg' alt='star'></img>
                            <img src='/assets/svg/star.svg' alt='star'></img>
                            <img src='/assets/svg/star.svg' alt='star'></img>
                            <img src='/assets/svg/star.svg' alt='star'></img>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}
