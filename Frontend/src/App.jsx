
import { Routes,Route } from "react-router-dom"
import Landing from "../Pages/Landing/Landing.jsx"
import Login from "../Pages/Auth/Login"
import Register from "../Pages/Auth/Register"
import About from "../Pages/About/About"
import TodoList from "../Pages/Todo/TodoList"
import HomePage from "../Pages/Home/HomePage.jsx"
import { Toaster } from 'react-hot-toast'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/to-dolist" element={<TodoList/>}/>
      </Routes>
      
      <Toaster />
    </div>
  )
}

export default App