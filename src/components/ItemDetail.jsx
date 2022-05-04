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
        
      <section className="text-gray-700 body-font overflow-hidden h-screen" >
        <div className="container px-5 pb-5 pt-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            
            <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded" src={productos.pictureUrl}/>
            
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-0 mt-6 lg:mt-0">     
              
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-2">{productos.title}</h1>              
              
              <p className="leading-relaxed">Framed Fine Art Print {productos.title}<br></br><span className='leading-10 font-medium'>Photography by Alejandro Acosta</span><br></br>HIGH QUALITY PAPER - <br></br>C Type Fuji Matt Fuji Crystal archive paper with a semi-matt finish. The paper is coated with a slightly stippled texture giving a very natural photographic finish with subtle colour. Great versatile paper, very natural and works well with all photographic images. Maintains colours in a very natural way, giving a detailed, 3-dimensional beautiful photographic reproduction."</p>
              
              <h2 className="text-xs title-font text-gray-500 tracking-widest mt-5">CODIGO: FA-000{productId}</h2>

              <div className="flex items-center pb-2 border-b-2 border-gray-800 mb-4">           
              </div>

              <div className="flex bg-transparent items-center" data-theme="bumblebee">

                <span className="title-font font-medium text-2xl text-gray-900">{productos.price}</span>
                <button className="flex ml-auto btn btn-secondary">Añadir</button>
                
              </div>

            </div>
          </div>
        </div>
      </section>              

    </>  
  )
}

export default ItemDetail