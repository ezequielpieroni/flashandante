import CartIcon from "../cart/CartIcon"
import ProductsCart from "./ProductsCart"

function CartWidget() {
    return (
        <div className="carrito__numero">
            <div className="carrito">
                <a href="/#">
                    <CartIcon ancho={20} alto={20}/>
                </a>    
            </div>
            <div className="numero">
                <ProductsCart />
            </div>
        </div>
    )
    
}

export default CartWidget