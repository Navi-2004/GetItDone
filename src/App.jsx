import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import SignUp from './pages/SignUp'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
function App() {

  return (
    <div>
      
      <Router>
        <Routes>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<SignUp/>} />
        <Route exact path='/' element={<Home/>} />


        </Routes>
      </Router>
    </div>
  )
}

export default App
