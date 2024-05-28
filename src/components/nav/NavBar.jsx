import { useState } from "react";
import Brand from "../brand/Brand";
import CartWidget from "../cart/CartWidget";
import CategoryList from "../categories/CategoryList";
import "./navbar.scss";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="brand">
                <Brand />
            </div>
            <button
                className={`hamburger-menu ${menuOpen ? 'open' : ''}`}
                onClick={handleMenuToggle}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`navbar__right ${menuOpen ? 'open' : ''}`}>
                <div className="menu-items">
                    <CategoryList handleMenuToggle={handleMenuToggle} />
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
