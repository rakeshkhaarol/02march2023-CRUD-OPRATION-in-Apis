import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './teacher/pages/Home'
import Login from './teacher/pages/Login'
import Register from './teacher/pages/Register'

export default function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path='register' element={<Register/>}></Route>
            </Route>
            <Route path='/login' element={<Login/>} ></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}
