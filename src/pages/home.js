import { Navbar, Footer, Historia } from "../components/index"
import '../styles/Home.css'

export const Home = () => {
    return(
        <>
            <header style={{ backgroundImage: `url(/assets/images/fondoHome.png)` }}>
                <Navbar />
                <div className="homeMainText">
                    <h2 className="homeTitle">Los mejores<br/>cortes de carne</h2>
                    <h3 className="homeSubTitle">Y los mojitos más deliciosos de todo Tepoztlán en un<br/>ambiente tradicional mexicano.</h3>
                    <button className="homeButton">VER MENÚ</button>
                </div>
            </header>
            <Historia />
            <Footer />
        </>
    )
}
