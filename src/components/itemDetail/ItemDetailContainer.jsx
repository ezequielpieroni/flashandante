import ItemDetail from "./ItemDetail";
import useProductById from "../../hooks/useProductById";
import { useParams } from "react-router-dom";


export default function ItemDetailContainer () {

    const {product, cargando} = useProductById()

    if (cargando) return <h1>Cargando...</h1>
    
    return (
        <div>
            {product && <ItemDetail item={product} />}
        </div>
    )
}