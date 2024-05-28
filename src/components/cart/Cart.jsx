import React, { useContext } from 'react'
import "./cart.scss"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCount from '../counter/ItemCount'
import TrushIcon from './TrushIcon'
import Arrow from './Arrow'

const Cart = () => {

  const { carrito, cantidadEnCarrito, precioTotal, vaciarCarrito, addItem, removeItem, actualizarCantidad } = useContext(CartContext)

  const handleVaciar = () => {
    vaciarCarrito()
  }


  return (

    <div className="main--container cartContainer">
      <div>
        <div className="cartHeaderContainer">
          <h1>Mi carrito </h1>
          <h4>{cantidadEnCarrito()} productos</h4>
        </div>
        <div className='seguirComprando'>
          <h4><Link to={`/`}>Seguir comprando <Arrow ancho="15px" alto="15px"/></Link></h4>
        </div>
      </div>
      {carrito.map((product) => {
          return (
            <div className="cartProductContainer" key={product.id}>
              <div>
                <img className="cartProductImage" src={product.image} alt="" />
              </div>
              <div>
                <div className="cartProductTitle">
                  <h3>{product.product}</h3>
                  <button onClick={() => removeItem(product.id)}>
                    <TrushIcon ancho="25px" alto="25px"/>
                  </button>
                </div>
                
                <div className="cartProductCantidad">
                  <p>Cantidad:</p>
                  <ItemCount
                    stock={product.stock}
                    count={product.cantidad}
                    incrementar={() => actualizarCantidad(product.id, product.cantidad + 1)}
                    decrementar={() => {
                      if (product.cantidad > 1) {
                        actualizarCantidad(product.id, product.cantidad - 1);
                      }
                    }}
                  />
                  <p>Total: ${product.price * product.cantidad}</p>
                </div>
              </div>
            </div>
          )

        })
      }
      {carrito.length > 0 ?
          <div className="cartActionsContainer">  
              <h2>Precio total: ${precioTotal()}</h2>
              
            <div className="cartButtonContainer">
              <button onClick={handleVaciar}>Vaciar carrito</button>
              <Link to="/checkout"><button>Finalizar compra</button></Link>
            </div>
          </div> :
          <h2>El carrito esta vacío</h2>
      }


    </div>
  )
}

export default Cart