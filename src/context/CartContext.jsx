import React, { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';


export const CartContext = React.createContext([])

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []

export const CartProvider = ({children}) => {

  const [carrito, setCarrito] = useState(carritoInicial)
  


  const addItem = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    const nuevoCarrito = [...carrito];
    const isInCart = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

    if (isInCart) {
      const nuevaCantidad = isInCart.cantidad + cantidad;
      if (nuevaCantidad <= item.stock) {
        isInCart.cantidad = nuevaCantidad;
        setCarrito(nuevoCarrito);
        toast.success(`¡Se agregaron ${cantidad} ${item.product} al carrito!`);
      } else {
        toast.error("No se puede agregar más del stock disponible");
      }
    } else {
      if (cantidad <= item.stock) {
        nuevoCarrito.push(itemAgregado);
        setCarrito(nuevoCarrito);
        toast.success(`¡${item.product} fue agregado al carrito!`);
      } else {
        toast.error("No se puede agregar más del stock disponible");
      }
    }
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, product) => acc + product.cantidad, 0)
  }

  const precioTotal = () => {
    return carrito.reduce((acc, product) => acc + product.cantidad * product.price, 0)
  }

  const removeItem = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
  };

  const actualizarCantidad = (id, cantidad) => {
    const nuevoCarrito = carrito.map((producto) => 
      producto.id === id ? { ...producto, cantidad } : producto
    );
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([])
  }

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])

  return (
    <CartContext.Provider value={{ 
      carrito, 
      addItem, 
      cantidadEnCarrito, 
      precioTotal, 
      vaciarCarrito,
      removeItem,
      actualizarCantidad
    }}>
      {children}
    </CartContext.Provider>
  )
}