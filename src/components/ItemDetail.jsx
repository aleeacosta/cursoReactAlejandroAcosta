import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'

const ItemDetail = () => {

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
    <>          
        
      <section class="text-gray-700 body-font overflow-hidden h-screen" >
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            
            <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded" src={productos.pictureUrl}/>
            
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-0 mt-6 lg:mt-0">     
              
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-2">{productos.title}</h1>              
              
              <p class="leading-relaxed">Framed Fine Art Print {productos.title}<br></br><span className='leading-10 font-medium'>Photography by Alejandro Acosta</span><br></br>HIGH QUALITY PAPER - <br></br>C Type Fuji Matt Fuji Crystal archive paper with a semi-matt finish. The paper is coated with a slightly stippled texture giving a very natural photographic finish with subtle colour. Great versatile paper, very natural and works well with all photographic images. Maintains colours in a very natural way, giving a detailed, 3-dimensional beautiful photographic reproduction."</p>
              
              <h2 class="text-xs title-font text-gray-500 tracking-widest mt-5">CODIGO: FA-000{productId}</h2>

              <div class="flex items-center pb-2 border-b-2 border-gray-800 mb-4">           
              </div>

              <div class="flex bg-transparent items-center" data-theme="bumblebee">

                <span class="title-font font-medium text-2xl text-gray-900">{productos.price}</span>
                <button class="flex ml-auto btn btn-secondary">Añadir</button>
                
              </div>

            </div>
          </div>
        </div>
      </section>              

    </>  
  )
}

export default ItemDetail