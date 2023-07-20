import Foot from "./Components/Footer/Foot"
import Navbar from "./Components/Header/Navbar"
import About from "./Pages/About/About"
import Cart from "./Pages/Cart/Cart"
import Shop from "./Pages/Shop/Shop"
import Home from "./Pages/Home/Home"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"

function App() {


  return (

<Router>
  <Navbar />

  <Routes>
  <Route exact path="/" element = { <Home />} />
  <Route  path="/about" element = { <About />} />
  <Route  path="/shop" element = { <Shop />} />
  <Route  path="/cart" element = { <Cart />} />
  </Routes>

  <Foot />
   </Router>
    
  )

}

export default App
