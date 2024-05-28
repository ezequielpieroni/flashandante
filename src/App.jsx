import "./App.css"
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer"
import ItemListContainer from "./components/itemList/ItemListContainer"
import Layout from "./components/Layout/Layout"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Nosotros from "./components/nosotros/Nosotros"
import {CartProvider } from "./context/CartContext"
import Cart from "./components/cart/Cart"
import Checkout from "./components/checkout/Checkout"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  
  const saludo = "Bienvenido a Flash Andante!"
  
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer greetings={saludo}/>}  />
            <Route path="/item/:id" element={<ItemDetailContainer/>}  />
            <Route path="/category/:category" element={<ItemListContainer/>}  />
            <Route path="/nosotros" element={<Nosotros />}  />
            <Route path="/cart" element={<Cart />}  />
            <Route path="/checkout" element={<Checkout />}  />
          </Routes> 
        </Layout>      
      </BrowserRouter>
      <ToastContainer position="bottom-right"/>
    </CartProvider>
  )
}



