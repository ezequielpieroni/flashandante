import Footer from "../footer/Footer";
import NavBar from "../nav/NavBar";
import "./layout.css" 

export default function Layout ({children}){

    return (
        <div className="layout--container">
            <NavBar />
            <main className="main--container">{children}</main>
            <Footer />
        </div>
    )
}