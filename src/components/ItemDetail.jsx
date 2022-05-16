import React, { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"


const ItemDetail = ({products}) => {

  const { title, price, stock, pictureUrl, id } = products

	const [terminar, setTerminar] = useState(false)

	const onAdd = (count) => {
		setTerminar(true)
		console.log(count)
	}

  return (
    <>          
        
      <section className="text-gray-700 body-font overflow-hidden h-screen" >
        <div className="container px-5 pb-5 pt-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            
            <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded" src={products.pictureUrl}/>
            
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-0 mt-6 lg:mt-0">     
              
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-2">{products.title}</h1>              
              
              <p className="leading-relaxed">Framed Fine Art Print {products.title}<br></br><span className='leading-10 font-medium'>Photography by Alejandro Acosta</span><br></br>HIGH QUALITY PAPER - <br></br>C Type Fuji Matt Fuji Crystal archive paper with a semi-matt finish. The paper is coated with a slightly stippled texture giving a very natural photographic finish with subtle colour. Great versatile paper, very natural and works well with all photographic images. Maintains colours in a very natural way, giving a detailed, 3-dimensional beautiful photographic reproduction."</p>
              
              <h2 className="text-xs title-font text-gray-500 tracking-widest mt-5">CODIGO: FA-000{products.id}</h2>

              <div className="flex items-center pb-2 border-b-2 border-gray-800 mb-4">           
              </div>

              <div className="flex bg-transparent items-center" data-theme="bumblebee">

                <span className="title-font font-medium text-2xl text-gray-900">{products.price}</span>
                
                {terminar ? (
								<Link
									to="/cart"
									className="flex ml-auto btn btn-secondary"
								>
									Terminar Compra
								</Link>
							  ) : (
								<ItemCount stock={stock} onAdd={onAdd} id={id} />
							  )}



              </div>

            </div>
          </div>
        </div>
      </section>              

    </>  
  )
}

export default ItemDetail