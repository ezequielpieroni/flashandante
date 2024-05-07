import { useState } from "react"
import { useEffect } from "react"
import { getProducts } from "../Mock/asyncMock"


export default function useProducts(category) {

    const [products, setProducts] = useState ([])
    const [cargando, setCargando] = useState (true)
    const [titulo, setTitulo] = useState("")
    console.log(cargando);
    useEffect (() => {
        
        if (!cargando) {
            setCargando(true);
        }
        getProducts()
            .then((data) => {
                if (category) {
                    setProducts(data.filter((prod) => prod.category === category))
                    setTitulo(category)
                    setCargando(true)
                } else {
                    setProducts(data)
                    setTitulo("Todos los productos")
                    setCargando(true)
                }})
            .finally(() => setCargando(false))
    }, [category])

    return {products, cargando, titulo}    
}