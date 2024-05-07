import "./App.css"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import Layout from "./components/Layout/Layout"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Nosotros from "./components/nosotros/Nosotros"


export default function App() {
  
  const saludo = "Bienvenido a Flash Andante!"

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer greetings={saludo}/>}  />
          <Route path="/item/:id" element={<ItemDetailContainer/>}  />
          <Route path="/category/:category" element={<ItemListContainer/>}  />
          <Route path="/nosotros" element={<Nosotros />}  />
        </Routes>
        
      </Layout>      
    </BrowserRouter>
  )
}
