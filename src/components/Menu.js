import '../styles/Menu.css'
import { Line } from './icons/Line'
import { Link } from "react-router-dom"

export const Menu = () => {
    return(
        <section className='menuSection'>
            <div className='menuSectionContent'>
                <div className='menuHeader'>
                    <div className='menuHeaderTitle'>
                        <h4>MENÚ <Line /></h4>
                        <h3>Nuestro<br/>menu</h3>
                    </div>
                    <p>Conoce nuestras especialidades<br/>para compartir con toda la familia</p>
                </div>
                <div className='menuLinks'>
                    <div className='menuCards' style={{ backgroundImage: `url(/assets/images/platos.png)` }}>
                        <Link to={`/menu/platos`}><button className='menuCardsButton'>platos</button></Link>
                    </div>
                    <div className='menuCards' style={{ backgroundImage: `url(/assets/images/postres.png)` }}>
                    <Link to={`/menu/postres`}><button className='menuCardsButton'>postres</button></Link>
                    </div>
                    <div className='menuCards' style={{ backgroundImage: `url(/assets/images/bebidas.jpg)` }}>
                    <Link to={`/menu/bebidas`}><button className='menuCardsButton'>bebidas</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}