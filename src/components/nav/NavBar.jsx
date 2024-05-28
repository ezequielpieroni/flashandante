import Brand from "../brand/Brand";
import CartWidget from "../cart/CartWidget";
import CategoryList from "../categories/CategoryList";
import "./navbar.scss"

function NavBar() {
    return (
        <nav className="navbar">
            <div className="brand">
                <Brand />
            </div>
            <div className="navbar__right">
                <CategoryList />
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar