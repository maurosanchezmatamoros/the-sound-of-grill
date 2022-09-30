import { useEffect, useState} from "react"
import { Loader } from "."
import MenuItemList from "../containers/MenuItemList"
import { Row, Col } from 'react-bootstrap'
import { menuItems } from "../data/menuItems"
import Swal from "sweetalert2"
import "../styles/MenuList.css"
import { Line } from "./icons/Line"


export const MenuList = ({ category, setCategory }) => {
    

    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const getItems = async () => {
            try {
                const itemsFiltered = menuItems.filter(
                    (element) => element.category === category
                )
                if (itemsFiltered.length > 0) {
                    setMenu(itemsFiltered)
                }
                else if (category === 'destacados') {
                    const itemsDestacados = menuItems.filter(
                        (element) => element.destacados === true
                    )
                    setMenu(itemsDestacados)
                }
                else{ 
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
        <section id='menu'>
            <Row className="p-4 py-5 px-lg-6 gx-0 justify-content-center">
                <Row className="menuTextContainer px-3 px-sm-5 px-md-6 px-lg-6 gx-0">
                    <Col md={4} lg={6}>
                        <h4>MENÚ <Line /></h4>
                        {category === 'bebidas'? <h3>Nuestras<br/>{category}</h3> : <h3>Nuestros<br/>{category}</h3>}
                    </Col>
                    <Col md={4} lg={6} className="text-start text-md-end mb-4">
                        <p> Conoce nuestras especialidades<br/><br/>para compartir con toda la familia</p>
                    </Col>
                </Row>
                <div className="menuTabs px-3 px-sm-5 px-md-6 px-lg-6">
                    <button onClick={() => setCategory('destacados')}>{category === 'destacados'? <b>Destacados</b> : 'Destacados'}</button>
                    <button onClick={() => setCategory('platos')}>{category === 'platos'? <b>Platos</b> : 'Platos'}</button>
                    <button onClick={() => setCategory('postres')}>{category === 'postres'? <b>Postres</b> : 'Postres'}</button>
                    <button onClick={() => setCategory('bebidas')}>{category === 'bebidas'? <b>Bebidas</b> : 'Bebidas'}</button>
                </div>
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
    )
}
