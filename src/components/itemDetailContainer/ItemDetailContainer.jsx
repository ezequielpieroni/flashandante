import { useEffect, useState } from "react"
import { getItemById } from "../../Mock/asyncMock";
import ItemDetail from "../itemList/ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer () {

    const [item, setItem] = useState(null);
    const id = useParams().id

    useEffect(() => {
        getItemById(Number(id))
            .then ((res) => {
                setItem(res)
            })
    }, [Number(id)])
    
    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}