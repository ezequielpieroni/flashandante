import "./itemCount.css"


function ItemCount({stock, count, incrementar, decrementar}) { 

    return (
        <div className="contador">
            <button 
                className="minusBotton"
                onClick={decrementar}
                disabled= {count <= 0}
            >
                -
            </button>
            <span className="counter">{count}</span>
            <button 
                className="plusBotton"
                onClick={incrementar} 
                disabled= {count >= stock}
            >
                +
            </button>
        </div>
    )
}

export default ItemCount
