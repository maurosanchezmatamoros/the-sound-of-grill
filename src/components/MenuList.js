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

    const menuDescargarData = async () =>{
        try {
            await fetch(process.env.PUBLIC_URL + 'Menu_SOG.pdf', {
                method: 'GET',
                headers: {
                'Content-Type': 'application/pdf',
                },
            })
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                new Blob([blob]),
                );
                const link = document.createElement('a')
                link.href = url;
                link.setAttribute(
                'download',
                `Menu_SOG.pdf`,
                )
    
                // Append to html link element page
                document.body.appendChild(link);
    
                // Start download
                link.click()
    
                // Clean up and remove the link
                link.parentNode.removeChild(link)
            })
        } catch {
            setError(true)
        }        
    }

    return(
        <section id='menu'>
            <Row className="menuContainer gx-0 justify-content-center">
                <Row className="menuTextContainer gx-0">
                    <Col md={4} lg={6}>
                        <h4>MENÚ <Line /></h4>
                        {category === 'bebidas'? <h3>Nuestras<br/>{category}</h3> : <h3>Nuestros<br/>{category}</h3>}
                    </Col>
                    <Col md={4} lg={6} className="text-start text-md-end">
                        <p> Conoce nuestras especialidades<br/><br/>para compartir con toda la familia</p>
                    </Col>
                </Row>
                <div className="menuTabs mt-4">
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
                <button className="mt-5 descargarMenu" onClick={menuDescargarData}>DESCARGAR MENÚ</button>
            </Row>
        </section>
    )
}
