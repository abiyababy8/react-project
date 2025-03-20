import { Routes,Route } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Pets from "./pages/Pets"
import PetDetails from "./pages/PetDetails"


function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/pets' element={<Pets/>}></Route>
        <Route path="/pets/:id" element={<PetDetails/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
