import { useContext } from "react"
import useCount from "../../hooks/useCount"
import ItemCount from "../counter/ItemCount"
import { CartContext } from "../../context/CartContext"


function ItemDetail({item}) {
  
    const {count, incrementar , decrementar} = useCount(1)
    const {carrito, addItem} =  useContext(CartContext)   

    return (

        <div className="itemCard">
            <img src={item.image} alt={item.product} />
            <div className="rightColumn">
                <div className="itemDetailDescription">
                    <h2>{item.product}</h2>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                    <p>Stock: {item.stock}</p>
                </div>
                <div className="counterItemDetail"> 
                    <ItemCount 
                    stock={item.stock} 
                    count={count} 
                    incrementar={incrementar} 
                    decrementar={decrementar} 
                    />
                </div>
                <button className="addToCartItem"  onClick={() => count && addItem(item, count)}>
                    Agregar al carrito
                </button>
            </div>
        </div>


  )
}

export default ItemDetail
