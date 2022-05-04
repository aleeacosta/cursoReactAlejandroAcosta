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
      <div className='h-full'>

        <h1 className="text-center text-4xl font-bold pt-10">{greeting}</h1>        
        
        {        
          products.length ? (
        
          <div className='flex flex-wrap justify-evenly justify-items-center p-5 m-0' style={{margin:'30px'}}>
            {products.map( products => <ProductCard key={products.id} productsData={products}/> )}
          </div>
          
          ) : ( 
          <div className='h-screen'>
            <p className='text-center m-7'>Cargando Productos...</p>
          </div>)  
        }

      </div>      
    </>
  )
}

export default ItemListContainer

