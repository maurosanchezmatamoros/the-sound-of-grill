import '../styles/Historia.css'
import { Line } from './icons/Line'

export const Historia = () => {
    return(
        <section className='historiaSection'>
            <div className="historiaImgContainer">
                <div className="historiaImgContainerBlock">
                    <img id='historiaTragos' src="./assets/images/historiaTragos.jpg" alt="tragos"></img>
                    <img id='historiaTablas' src="./assets/images/historiaTablas.jpg" alt="tablas"></img>
                </div>
            </div>
            <div className="historiaTextContainer">
                <h4>CONÓCENOS <Line /></h4>
                <h3>Nuestra<br/>historia</h3>
                <p> Los hermanos Galván crearon The Sound of Grill con el objetivo de tener un negocio que fomentara sus <b>valores familiares.</b><br/><br/>Como vienen de una familia muy unida, buscan que cada plato no solo deleite tu paladar, sino que <b>también te brinde una experiencia inolvidable junto con tus seres queridos.</b><br/><br/>En The Sound of Grill, podrás disfrutar de deliciosas tablas, ricos mojitos y platos con diferentes cortes de carnes a un excelente precio y rodeados de un ambiente <b>tradicional mexicano.</b></p>
            </div>
        </section>
    )
}