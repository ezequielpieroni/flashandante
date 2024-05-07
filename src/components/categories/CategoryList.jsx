import { Link } from "react-router-dom"

function CategoryList() {
    return (
        <ul className="categorias">
            <li><Link to={`/`}>Inicio</Link></li>
            <li><Link to={`/category/colgantes`}>Colgantes</Link></li>
            <li><Link to={`/category/pulceras`}>Pulceras </Link></li>
            <li><Link to={`/category/anillos`}>Anillos  </Link></li>
            <li><Link to={`/nosotros`}>Nosotros  </Link></li>
        </ul>        
    )
}

export default CategoryList