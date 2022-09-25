import { useEffect, useState} from "react"
import { Navbar, Footer, Loader } from "../components"
import MenuItemList from "../containers/MenuItemList"
import { useParams } from "react-router-dom"
import { Row } from 'react-bootstrap'
import { menuItems } from "../menuItems"
import Swal from "sweetalert2"
import "../styles/MenuList.css"


export const MenuList = () => {
    

    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { category } = useParams()

    useEffect(() => {
        const getItems = async () => {
            try {
                
                const itemsFiltered = menuItems.filter(
                    (element) => element.category === category
                )
                
                if (itemsFiltered.length > 0) {
                    setMenu(itemsFiltered)
                }
                else { 
                    Swal.fire({
                    title: 'No products in the selected category',
                    icon: 'error',
                    background: '#161616',
                    showConfirmButton: false,
                    timer:1500,
                    })}
            }  
            catch {
                setError(true)
            } 
            finally {
                setTimeout(() => {
                    setLoading(false)
                    }, 1500)
            }
        }
        getItems()
    }, [category])

    return(
        <>
        <header style={{ backgroundImage: `url(/assets/images/fondoHome.png)` }}>
            <Navbar/>
            <div className="homeMainText">
                <h2 className="homeTitle">CONOCE EL MENÚ</h2>
                <h3 className="homeSubTitle">The Sound Of Grill</h3>
            </div>
        </header>
        <section>
            <Row className="p-5 justify-content-center">
            {
            loading ? (
                <Loader/>
            ) : (
                error ? (
                    <h1>We're sorry, something went wrong...</h1>
                ) : (
                    <MenuItemList menu={menu}/>
                )
            )
            }
            </Row>
        </section>
        <Footer/>
        </>
    )
}
