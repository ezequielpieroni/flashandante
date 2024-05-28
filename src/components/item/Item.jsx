import { Link } from "react-router-dom";
import "./item.css"
import toCapital from "../../hooks/useCapital";
import useLastLetter from "../../hooks/useLastLetter";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Item({item}) {

    const {carrito, setCarrito} =  useContext(CartContext)

    return (
        <div className="item--container">
            <div className="image">
                <Link 
                    to={`/item/${item.id}`}>
                    <img src={item.image} alt={item.product} />
                </Link>
                
            </div>
            <div className="footCard">
                <h4>{item.product}</h4>
                <h5>{toCapital(useLastLetter(item.category))}</h5>
                <p>Precio: ${item.price}</p>
                <Link to={`/item/${item.id}`}><button>Ver mas</button></Link>
            </div>

        </div>
    )
}