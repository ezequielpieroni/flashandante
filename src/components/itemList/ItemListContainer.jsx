import useProducts from "../../hooks/useProducts"
import ItemList from "../itemList/ItemList"
import "./itemListContainer.css"


function ItemListContainer({greetings}) {

    const {cargando, products, titulo} = useProducts()
    
    if (cargando) return <h1 className="cargando">Cargando...</h1>

    return (
        <div>
            {greetings && <h1 className="saludo">{greetings}</h1>}
            <ItemList products={products} titulo={titulo}/>
        </div>
    )
}

export default ItemListContainer