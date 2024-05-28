import { useState } from "react"
import { useEffect } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"
import { useParams } from "react-router-dom"



export default function useProducts() {

    const [products, setProducts] = useState ([])
    const [cargando, setCargando] = useState (true)
    const [titulo, setTitulo] = useState("")
    const category = useParams().category

    useEffect (() => {
        
        setCargando(true)
        const productosCollection = collection(db, "item")
        const q = category ? query(productosCollection, where("category", "==", category)) : productosCollection
 
        getDocs(q)
        .then((snapshot) => {

            setProducts(
                snapshot.docs.map((doc) => {
                    return {...doc.data(), id: doc.id }
                })
            )
        })

        .finally(() => 
            setCargando(false)
        )

        if (category) {
            setTitulo(category)
        } else {         
            setTitulo("")
        }
        
    }, [category])
    
    return {products, cargando, titulo}    
}

