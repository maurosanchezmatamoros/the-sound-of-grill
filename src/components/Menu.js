import '../styles/Menu.css'
import { Line } from './icons/Line'
import { Link } from "react-scroll"
import { MenuList } from '.'
import { useContext } from 'react'
import { categoryContext } from '../App'

export const Menu = () => {

    const { category, setCategory } = useContext(categoryContext)

    return(
        <>
            <section className='menuSection' id='nuestroMenu'>
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
                            <Link to='menu' spy={true} smooth={true} offset={-60} duration={100} >
                                <button onClick={() => setCategory('platos')} className='menuCardsButton'>platos</button>
                            </Link>
                        </div>
                        <div className='menuCards' style={{ backgroundImage: `url(/assets/images/postres.png)` }}>
                            <Link to='menu' spy={true} smooth={true} offset={-60} duration={100} >
                                <button onClick={() => setCategory('postres')} className='menuCardsButton'>postres</button>
                            </Link>
                        </div>
                        <div className='menuCards' style={{ backgroundImage: `url(/assets/images/bebidas.jpg)` }}>
                            <Link to='menu' spy={true} smooth={true} offset={-60} duration={100} >
                                <button onClick={() => setCategory('bebidas')} className='menuCardsButton'>bebidas</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <MenuList category={category} setCategory={setCategory} />
        </>
    )
}