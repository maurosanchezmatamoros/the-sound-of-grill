import React from "react"
import Spinner from 'react-bootstrap/Spinner'

export const Loader = () => {

    return (
        <>
        <div className="d-flex mt-5 justify-content-center loader">
            <Spinner animation="border"/>
            <p >Cargando...</p>
        </div>
        </>
    )
}