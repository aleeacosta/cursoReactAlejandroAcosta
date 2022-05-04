import { Link } from "react-router-dom"

const ProductCard = ( {productsData} ) => {
    return (
      <div className='card w-96 bg-base-100 shadow-xl m-5' data-theme="bumblebee">  

        <figure style={ {maxHeight:'270px', overflow:'hidden'}}><img src={productsData.pictureUrl} alt="" /></figure>

        <div className="card-body items-center text-center pb-5">
            <h2 className="card-title">{productsData.title}</h2>
            <p>{productsData.price}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary my-2"><Link to={`/productos/${productsData.id}`}>Detalles</Link></button>
            <button className="btn btn-secondary my-2">Añadir</button>
            </div>
        </div>          
      </div>
    )
  }
  export default ProductCard

  