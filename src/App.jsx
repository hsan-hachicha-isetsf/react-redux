import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Listarticles from "./components/client/Listarticles"
import Cart from "./components/client/Cart"
import Productsappadmin from "./components/admin/articles/Productsappadmin"
import Listcategories from "./components/admin/categories/Listcategories"
import Listscategories from "./components/admin/scategories/Listscategories"
import Menu from "./components/admin/Menu"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import StripePayment from './components/client/StripePayment';
import Login from "./components/admin/Login"
import Register from "./components/admin/Register"

function App() {
  

  return (
    <>
    <ToastContainer/>
     <Router>
      
      <Routes>
        <Route path="" element={<Login/>}/>
        <Route path="/admin/menu" element={<Menu/>}/>
        <Route path="/register" element ={<Register/>}/> 
        <Route path="/articlesclient" element={<Listarticles/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/articlesadmin" element={<Productsappadmin/>}/>
        <Route path="/categories" element={<Listcategories/>}/>
        <Route path="/scategories" element={<Listscategories/>}/>
        <Route path='/pay/:total' element={<StripePayment/>}/>
      </Routes>

     </Router>
    </>
  )
}

export default App
