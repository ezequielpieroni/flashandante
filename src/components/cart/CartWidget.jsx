import { Link } from "react-router-dom"
import CartIcon from "../cart/CartIcon"
import ProductsCart from "./ProductsCart"

function CartWidget() {

    return (
        <div className="carrito__numero">
            <div className="carrito">
                <Link to={`/cart`}><CartIcon ancho={20} alto={20}/></Link>  
            </div>
            <div>
                <ProductsCart />
            </div>
        </div>
    )
    
}

export default CartWidget