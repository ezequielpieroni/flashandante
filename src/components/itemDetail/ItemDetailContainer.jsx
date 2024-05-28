import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import useProductById from "../../hooks/useProductById";
import {doc, getDoc} from "firebase/firestore";

export default function ItemDetailContainer () {

    const {product, cargando} = useProductById()

    if (cargando) return <h1>Cargando...</h1>
    
    
    return (
        <div>
            {product && <ItemDetail item={product} />}
        </div>
    )
}