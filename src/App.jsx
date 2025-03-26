import {BrowserRouter, Route, Routes} from 'react-router'
import './App.css'
import LoginForm from './components/auth/login'
import RegisterForm from './components/auth/register'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { useAuthStore } from './Store/useAutheStore'
import { useEffect } from 'react'

function App() {

  const {authUser,checkAuth}=useAuthStore()

  useEffect(()=>{
    checkAuth()
  },[checkAuth])

  return (
    <>
    <div className="">
      <BrowserRouter>
      <Navbar/>
      
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
