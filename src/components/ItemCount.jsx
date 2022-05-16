import React, { useState } from "react"
import { useAppContext } from "../context/AppContext"
import { useCartContext } from "../context/CartContext"

const ItemCount = ({ stock, onAdd, id }) => {
	const [count, setCount] = useState(0)

	const { addToCart } = useCartContext()
	const { products } = useAppContext()

	const handleAdd = () => {
		if (count < stock) {
			setCount(count + 1)
		}
	}
	const handleRemove = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	}

	const handleClick = (id, cantidad) => {
		const findProduct = products.find((producto) => producto.id === id)

		if (!findProduct) {
			alert("Error en la base de datos")
			return
		}

		addToCart(findProduct, cantidad)
		onAdd(count)
	}

	return (
		<>
			<div className="flex gap-4 ">
				<div className="flex flex-row items-center">
					<button className="btn btn-primary m-1 text-lg" onClick={handleRemove}>
						-
					</button>
					<label className="input input-bordered input-accent m-1 text-lg">{count}</label>
					<button className="btn btn-primary m-1 text-lg" onClick={handleAdd}>
						+
					</button>
				</div>
				<div className="flex flex-row items-center">
					<button
						className="flex ml-auto btn btn-secondary"
						onClick={() => handleClick(id, count)}
					>
						Agregar al Carrito
					</button>
				</div>
			</div>
		</>
	)
}

export default ItemCount