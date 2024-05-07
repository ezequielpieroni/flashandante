import { Link } from "react-router-dom";
import useCount from "../../hooks/useCount";
import ItemCount from "../counter/ItemCount";
import "./item.css"
import toCapital from "../../hooks/useCapital";
import useLastLetter from "../../hooks/useLastLetter";

export default function Item({item}) {

    const {count, incrementar , decrementar} = useCount(0)

    const onAdd = (nombreDeItem, cantidadaLlevar) => {
        console.log(("Nombre del item: ", nombreDeItem));
        console.log(("Catidad a llevar: ", cantidadaLlevar));
    }

    return (
        <div className="item--container">
            <div className="image">
                <Link 
                    to={`/item/${item.id}`}>
                    <img src={item.image} alt={item.product} />
                </Link>
                
            </div>
            <div className="footCard">
                <h2>{item.product}</h2>
                <h4>{toCapital(useLastLetter(item.category))}</h4>
                <p>Precio: ${item.price}</p>
                <button><Link to={`/item/${item.id}`}>Ver mas</Link></button>
            </div>
            <div className="counterContainer"> 
                <ItemCount 
                    stock={item.stock} 
                    count={count} 
                    incrementar={incrementar} 
                    decrementar={decrementar} 
                />
            </div>
            <button className="addToCart" onClick={() => onAdd(item, count)}>
                Agregar al carrito
            </button>

        </div>
    )
}