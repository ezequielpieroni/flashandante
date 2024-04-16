import "./App.css"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/nav/NavBar"

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer size="md" greetings="Hola, esto es Flash Andante, artesanía en movimiento."/>
    </div>
  )
}

export default App
