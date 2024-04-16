import "./ItemListContainer.css"

function ItemListContainer({greetings}) {
    return (
        <div className="saludo">
            <h1>{greetings}</h1>
        </div>
    )
}

export default ItemListContainer