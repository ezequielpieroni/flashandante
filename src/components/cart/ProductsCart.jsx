import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function ProductsCart() {

    const {cantidadEnCarrito} = useContext(CartContext)

    return (
        cantidadEnCarrito() > 0 &&  (<span className="numero">{cantidadEnCarrito()}</span>)
    )
    
}

export default ProductsCart