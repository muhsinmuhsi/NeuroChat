import {BrowserRouter, Route, Routes} from 'react-router'
import './App.css'
import LoginForm from './components/auth/login'
import RegisterForm from './components/auth/register'
import Navbar from './components/header/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <>
    <div className="">
      <Navbar/>
      {/* <Home/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginForm/>} />
        <Route path='/register' element={<RegisterForm/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
      
    </>
  )
}

export default App
