import { useEffect, useState} from "react"
import { Loader } from "."
import MenuItemList from "../containers/MenuItemList"
import { Row } from 'react-bootstrap'
import { menuItems } from "../data/menuItems"
import Swal from "sweetalert2"
import "../styles/MenuList.css"


export const MenuList = ({ category }) => {
    

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
                        (element) => element.destacado === true
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
    )
}
