import {doc, getDoc} from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";


export default function useProductById() {

    const [product, setProduct] = useState(null);
    const [cargando, setCargando] = useState (true)
    const id = useParams().id

    useEffect(() => {
        
        const docRef = doc(db, "item", id)
        
        getDoc(docRef)
            .then((snapshot) => {
                setProduct({...snapshot.data(), id: snapshot.id})
            })
            .finally(() => 
                setCargando(false))

    }, [id]);

    return {product, cargando}   
}


