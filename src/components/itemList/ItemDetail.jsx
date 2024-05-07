import useCount from "../../hooks/useCount"
import ItemCount from "../counter/ItemCount"


function ItemDetail({item}) {
  
    const {count, incrementar , decrementar} = useCount(0)

    const onAdd = (nombreDeItem, cantidadaLlevar) => {
        console.log(("Nombre del item: ", nombreDeItem));
        console.log(("Catidad a llevar: ", cantidadaLlevar));
    }
    
    return (

        <div className="itemCard">
            <img src={item.image} alt={item.product} />
            <div className="rightColumn">
                <div className="itemDetailDescription">
                    <h2>{item.product}</h2>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                </div>
                <div className="counterItemDetail"> 
                    <ItemCount 
                    stock={item.stock} 
                    count={count} 
                    incrementar={incrementar} 
                    decrementar={decrementar} 
                    />
                </div>
                <button className="addToCartItem"  onClick={() => onAdd(item, count)}>
                    Agregar al carrito
                </button>
            </div>
        </div>


  )
}

export default ItemDetail