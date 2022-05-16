import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/asyncmock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const {productId} = useParams()
    const [productos, setProductos] = useState( {} )

    useEffect( () => {

    (async () => {
        const products = await getItemDetail()
        if (products) {
        
        setProductos(products)

        }
    })()   

    }, [productId])

    const getItemDetail = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve( products.find( p => p.id == productId) )
        }, 0)
    })
    }  

    return (

    <div>{productos ? <ItemDetail products={productos} /> : <p>Obteniendo producto...</p>}</div>

    )
}

export default ItemDetailContainer