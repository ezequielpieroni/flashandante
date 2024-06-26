import "./itemCount.scss"


function ItemCount({stock, count, incrementar, decrementar}) { 
    
    return (
        <div className="contador">
            <button 
                className="minusButton"
                onClick={decrementar}
                disabled= {count <= 0}
            >
                -
            </button>
            <span className="counter">{count}</span>
            <button 
                className="plusButton"
                onClick={incrementar} 
                disabled= {count >= stock}
            >
                +
            </button>
        </div>
    )
}

export default ItemCount
