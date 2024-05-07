import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts"
import ItemList from "../itemList/ItemList"
import "./itemListContainer.css"


function ItemListContainer({greetings}) {

    
    const category = useParams().category
    const {cargando, products, titulo} = useProducts(category)
    
    if (cargando) return <h1>Cargando...</h1>
    
    return (
        <div>
            <h1 className="saludo">{greetings}</h1>
            <ItemList products={products} titulo={titulo}/>
        </div>
    )
}

export default ItemListContainer