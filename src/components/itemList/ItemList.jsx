import toCapital from "../../hooks/useCapital";
import Item from "./Item";
import "./item.css"

export default function ItemList ({ products, titulo }) {
    return (
        <div>
            <div className="title">
                <h1>{toCapital(titulo)}:</h1> 
            </div>
            <div className="item--list">            
                {products.map ((products) => (
                    <Item key={products.id} item={products} />
                ))}
            </div>

        </div>
    )
}