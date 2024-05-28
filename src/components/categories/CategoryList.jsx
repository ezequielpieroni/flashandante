import { Link } from "react-router-dom"

function CategoryList(handleMenuToggle) {
    
    return (
        <ul className="categorias">
            <li><Link to={`/category/colgantes`}  onClick={handleMenuToggle}>Colgantes</Link></li>
            <li><Link to={`/category/pulceras`}  onClick={handleMenuToggle}>Pulceras </Link></li>
            <li><Link to={`/category/anillos`}  onClick={handleMenuToggle}>Anillos  </Link></li>
            <li><Link to={`/nosotros`}  onClick={handleMenuToggle}>Nosotros  </Link></li>
        </ul>        
    )
}

export default CategoryList