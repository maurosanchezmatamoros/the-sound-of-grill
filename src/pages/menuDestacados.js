import { Navbar, Footer, Menu} from "../components/index"
import "../styles/Menus.css"
import { useEffect, useState} from "react";
import ItemList from "../containers/ItemList";
import Loader from "../components/Loader"
import { Container, Row, Col } from 'react-bootstrap'
import swal from "sweetalert"
import { useParams } from "react-router-dom"
import { db } from "../firebase/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

export const MenuListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { category } = useParams()

    const getItems = async () => {

        const productsCollection = collection(db, "ItemCollection")

        if (category){
            try {
                const products = query(productsCollection, where("category", "==", `${category}`))
                getDocs(products)
                .then((result)=> {
                    const docs = result.docs
                    if (docs.length>0) {
                        const lista = docs.map( producto => {
                            const id = producto.id
                            const product = {
                                id,
                                ...producto.data()
                            }
                            return product
                        })
                        setProducts(lista)
                    } 
                    else { 
                        swal({
                        text: 'No products in the selected category',
                        icon: 'error',
                        })}
            })
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

        else {
            try {
                getDocs(productsCollection)
                .then((result)=> {
                    const docs = result.docs
                    if (docs.length>0) {
                        const lista = docs.map( producto => {
                            const id = producto.id
                            const product = {
                                id,
                                ...producto.data()
                            }
                            return product
                        })
                        setProducts(lista)
                    } 
                    else {  
                        swal({
                        text: 'No products',
                        icon: 'error',
                        })}
          
            })
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

    }

    useEffect(() => {
        getItems()
    }, [category])
    

    return (
        <>         
            <header style={{ backgroundImage: `url(/assets/images/fondoHome.png)` }}>
                    <Navbar />
                    <div className="homeMainText">
                        <h2 className="homeTitle">CONOCE EL MENÚ</h2>
                        <h3 className="homeSubTitle">The Sound Of Grill</h3>
                    </div>
            </header>
            <Menu/>
            
            <Container>
                {
                    loading ? (
                        <Loader />
                    ) : (
                        error ? (
                            <h1>We're sorry, something went wrong...</h1>
                        ) : (
                            <ItemList products={products} />
                        )
                    )
                }
            </Container>
            <Footer />
        </>
    )
}
