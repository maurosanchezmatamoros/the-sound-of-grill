import { Link } from "react-scroll"
import { Navbar, Footer, Historia, Menu, Carrousel, TheSog } from "./components/index"
import './styles/Home.css'

export const Home = () => {

    return(
        <>
            <header style={{ backgroundImage: `url(/assets/images/fondoHome.png)` }} id='inicio'>
                <Navbar />
                <div className="homeMainText">
                    <h2 className="homeTitle">Los mejores<br/>cortes de carne</h2>
                    <h3 className="homeSubTitle">Y los mojitos más deliciosos de todo Tepoztlán en un<br/>ambiente tradicional mexicano.</h3>
                    <Link to='nuestroMenu' spy={true} smooth={true} offset={-60} duration={100}><button className="homeButton">VER MENÚ</button></Link>
                </div>
            </header>
            <Historia />
            <Menu />
            <Carrousel />
            <TheSog />
            <Footer />
        </>
    )
}
