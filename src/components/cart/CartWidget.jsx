import CartIcon from "../cart/CartIcon"
import ProductosCarrito from "./ProductsCart"

function CartWidget() {
    return (
        <div className="carrito__numero">
            <div className="carrito">
                <a href="/#">
                    <CartIcon ancho={20} alto={20}/>
                </a>    
            </div>
            <div className="numero">
                <ProductosCarrito />
            </div>
        </div>
    )
    
}

export default CartWidget