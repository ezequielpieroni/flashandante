import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { useForm } from 'react-hook-form'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'
import "./checkout.scss"

const Checkout = () => {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

  const { register, handleSubmit } = useForm()

  const [pedidoId, setPedidoId] =useState("")

  const comprar = (data) => {

    const order = {
      cliente: data,
      producto: carrito,
      total: precioTotal()
    }
    console.log(order);

    const ordersRef = collection(db, "orders")

    addDoc(ordersRef, order)
      .then((doc) => {
        setPedidoId(doc.id)
        vaciarCarrito()
      })
  }

  if (pedidoId) {
    return (
      <div className="orderConfirmation">
        <h1>Gracias por tu compra!</h1>
        <h4>Número de pedido: {pedidoId}</h4>
      </div>
    )
  }

  return (

    <div className='contactContainer'>
      <h1 className='mainTitle'>Finalizar compra</h1>
      <form className='form' onSubmit={handleSubmit(comprar)}>

        <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
        <input type="email" placeholder="Ingresa tu email" {...register("email")} />
        <input type="phone" placeholder="Ingresa tu teléfono" {...register("telefono")} />
        <button type="submit">Enviar</button>

      </form>
    </div>
  )
}

export default Checkout