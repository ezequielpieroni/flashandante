import "./ItemListContainer.css"

function ItemListContainer({greetings, size}) {
    
    const styles = {
        fontSize: "30px"
    }

    if (size === "sm") {
        styles.fontSize = "20px"
    } else if (size === "md") {
        styles.fontSize = "40px"
    } else if (size === "lg") {
        styles.fontSize = "60px"
    }

    return (
        <div className="saludo">
            <h1 style={styles}>
                {greetings}
            </h1>
        </div>
    )
}

export default ItemListContainer