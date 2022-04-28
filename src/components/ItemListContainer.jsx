import React from 'react'
import { useEffect, useState } from "react";
import { products as productsData } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = new Promise( (resolve, reject) => {
      setTimeout( () =>{
        resolve(productsData)        
      }, 2000)
    })

    getProducts.then( (result) => {
      console.log('Se completó la promesa', result);
      setProducts(result)
    
    }).catch((err) => {
        console.log('hubo un error', err);
    })

    console.log('Se terminó el efecto');
  }, [])

  return (
    <>
      <h1 className="text-center text-4xl font-bold pt-10">{greeting}</h1>
      
      <div className='flex flex-wrap justify-evenly justify-items-center' style={{margin:'30px'}}>
        {products.map( products => <ProductCard key={products.id} productsData={products}/> )}
      </div>
    </>
  )
}

export default ItemListContainer

