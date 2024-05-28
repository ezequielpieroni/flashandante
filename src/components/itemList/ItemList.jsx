import { useParams } from "react-router-dom";
import toCapital from "../../hooks/useCapital";
import Item from "../item/Item";
import "../item/item.css"

export default function ItemList ({ products, titulo }) {
    
    const category = useParams().category

    const sortedProducts = !category
        ? [...products].sort((a, b) => {
              if (a.category < b.category) return -1;
              if (a.category > b.category) return 1;
              return 0;
          })
        : products;

    return (
        <div>
            <div className="title">
                <h2>{toCapital(titulo)}</h2> 
            </div>
            <div className="item--list">            
                {sortedProducts.map ((prod) => (
                    <Item key={prod.id} item={prod} />
                ))}
            </div>

        </div>
    )
}