import { Navbar, Footer, Menu} from "../components/index"
import "../styles/Menus.css"

export const MenuDestacados = () => {
    return(
        <>
        <header style={{ backgroundImage: `url(/assets/images/fondoHome.png)` }}>
                <Navbar />
                <div className="homeMainText">
                    <h2 className="homeTitle">CONOCE EL MENÚ</h2>
                    <h3 className="homeSubTitle">The Sound Of Grill</h3>
                </div>
        </header>
        <Menu/>
        <Footer />
        </>
    )
}
