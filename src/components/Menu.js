import '../styles/Menu.css'
import { Line } from './icons/Line'

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
                        <button className='menuCardsButton'>platos</button>
                    </div>
                    <div className='menuCards' style={{ backgroundImage: `url(/assets/images/postres.png)` }}>
                        <button className='menuCardsButton'>postres</button>
                    </div>
                    <div className='menuCards' style={{ backgroundImage: `url(/assets/images/bebidas.jpg)` }}>
                        <button className='menuCardsButton'>bebidas</button>
                    </div>
                </div>
            </div>
        </section>
    )
}