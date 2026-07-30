

import './App.css'
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import User from './pages/user';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/Dashboard' element={<Dashboard />} />



      </Routes>
    </BrowserRouter>



  )
}

export default App;
